import { Component, OnInit } from '@angular/core';
import {DatosFacturaService} from "../servicios/datos-factura.service";
import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-datos-factura',
  templateUrl: './datos-factura.component.html',
  styleUrls: ['./datos-factura.component.css']
})
export class DatosFacturaComponent implements OnInit {
  id_cliente:string="";
  direccion:string="";
  nit:string="";
  respuesta:any=[];
  credenciales:any=[];
  placeholders = {
    'direccion': 'Dirección de entrega',
    'nit': 'Número de nit'
  };

  constructor(private servdatos:DatosFacturaService,private router:Router) { }

  ngOnInit(): void {
    let a = localStorage.getItem("credenciales");
    if (a != null) {
      this.credenciales = JSON.parse(a);
      this.id_cliente = this.credenciales.user;
    }
  }

  siguiente_paso(){
    
      this.servdatos.enviar_datos(this.id_cliente,this.direccion,this.nit).subscribe(
        result=>{console.log(result)
          this.respuesta=result;
      
          if(this.respuesta.msg==true){
            console.log("devolvio true");
            localStorage.setItem("No_Factura",this.respuesta.name);
            this.router.navigate(['/pagar-factura']);
          }else{
           alert("Devolvio false");
  
          }
        },
        error=>{console.log(error)
        });
    
  }

}
