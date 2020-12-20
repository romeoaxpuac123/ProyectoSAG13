import { Component, OnInit } from '@angular/core';
import {OfertasClienteService} from "../servicios/ofertas-cliente.service";
@Component({
  selector: 'app-ofertas-cliente',
  templateUrl: './ofertas-cliente.component.html',
  styleUrls: ['./ofertas-cliente.component.css']
})
export class OfertasClienteComponent implements OnInit {

  
  credenciales:any=[];
  respuesta_productos:any=[];
  vector_aux:any=[];
  id_cliente:string="";

  constructor(private servofer:OfertasClienteService) { }
  
  ngOnInit(): void {
    let a = localStorage.getItem("credenciales");
    if (a != null) {
      this.credenciales = JSON.parse(a);
      this.id_cliente = this.credenciales.user;
    }
    this.solicitarOfertas();
  }

  solicitarOfertas() {
    this.servofer.solicitar_ofertas(this.id_cliente).subscribe(
      result=>{console.log(result)
               if(result!=null){
                console.log("se obtuvieron las ofertas.");
                this.respuesta_productos = result;
                let i = 0;
                while (this.respuesta_productos.result[i] != undefined) {
                  this.vector_aux.push([this.respuesta_productos.result[i].id_Producto, this.respuesta_productos.result[i].Subastado, this.respuesta_productos.result[i].imagen]);
                  i++;
                } 
               }else{
                alert("No se obtuvieron las ofertas");

               }
      },
      error=>{console.log(error)
      });
  }



}
