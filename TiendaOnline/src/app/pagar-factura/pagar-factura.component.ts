import { Component, OnInit } from '@angular/core';
import { TarjetasRegistradasService } from '../servicios/tarjetas-registradas.service';
import { PagarFacturaService } from '../servicios/pagar-factura.service';
import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-pagar-factura',
  templateUrl: './pagar-factura.component.html',
  styleUrls: ['./pagar-factura.component.css']
})
export class PagarFacturaComponent implements OnInit {
  respuesta_tarjetas:any=[];
  respuesta_factura:any=[];
  credenciales:any=[];
  vector_aux:any=[];
  id_cliente:string="";
  acumulador:string="";
  No_Factura:string="";


  constructor(private serv_tarjetas:TarjetasRegistradasService,private pa_factura:PagarFacturaService, private router:Router) { }

  ngOnInit(): void {
    let sesion = localStorage.getItem("credenciales");
    if(sesion!=null)
      this.credenciales=JSON.parse(sesion);
      this.id_cliente=this.credenciales.user;
    this.obtener_Tarjeta();

    let sesion_factura = localStorage.getItem("No_Factura");
    if(sesion_factura!=null)
      this.No_Factura=sesion_factura;
      console.log("No_factura",this.No_Factura);

  }

  obtener_Tarjeta() {
    
    this.serv_tarjetas.obtener_tarjetas(this.id_cliente).subscribe(
      result=>{console.log(result)
               this.respuesta_tarjetas=result;
               console.log(this.respuesta_tarjetas);
               if(this.respuesta_tarjetas!=null){
                
                let i = 0;
                while (this.respuesta_tarjetas.result[i] != undefined) {
                  this.vector_aux.push(this.respuesta_tarjetas.result[i].No_Tarjeta);
                  i++;
                } 
                console.log(this.vector_aux);
               }else{
                alert("Hubo un problema");

               }
      },
      error=>{console.log(error)
      });
     
  }

  pagar_factura() {
    
    this.pa_factura.pagar_factura(this.id_cliente,this.No_Factura).subscribe(
      result=>{console.log(result)
               this.respuesta_factura=result;
               console.log(this.respuesta_factura);
               if(this.respuesta_factura.msg=true){
                 alert("Gracias por tu compra");
                 this.router.navigate(['/cliente']);
               }else{
                alert("Hubo un problema");

               }
      },
      error=>{console.log(error)
      });
     
  }

}
