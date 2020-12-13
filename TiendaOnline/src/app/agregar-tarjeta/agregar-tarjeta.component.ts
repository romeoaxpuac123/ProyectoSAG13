import { Component, OnInit } from '@angular/core';
import { AgregarTarjetaService } from '../servicios/agregar-tarjeta.service';
@Component({
  selector: 'app-agregar-tarjeta',
  templateUrl: './agregar-tarjeta.component.html',
  styleUrls: ['./agregar-tarjeta.component.css']
})
export class AgregarTarjetaComponent implements OnInit {
  listainfo:any=[];
  credenciales:any=[];
  id_cliente:string="";
  No_Tarjeta:string="";
  
  placeholders = {
    'No_Tarjeta': 'Número de tarjeta',
  };


  
  constructor(private serv_add_tarjeta:AgregarTarjetaService) { }

  ngOnInit(): void {
    let sesion = localStorage.getItem("credenciales");
    if(sesion!=null)
      this.credenciales=JSON.parse(sesion);
      this.id_cliente=this.credenciales.user;
  }

  guardarTarjeta() {
    
    this.serv_add_tarjeta.guardar_tarjeta(this.No_Tarjeta,this.id_cliente).subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo.msg);
               if(this.listainfo.msg==true){
                alert("Tarjeta guardada con éxito.");
                window.location.reload();
                //alert("usuario valido");

               }else{
                alert("Hubo un problema");

               }
      },
      error=>{console.log(error)
      });
      
  
    
  }

}
