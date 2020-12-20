import { Component, OnInit } from '@angular/core';
import {MisFacturasService} from "../servicios/mis-facturas.service";
@Component({
  selector: 'app-mis-facturas',
  templateUrl: './mis-facturas.component.html',
  styleUrls: ['./mis-facturas.component.css']
})
export class MisFacturasComponent implements OnInit {

  credenciales:any=[];
  respuesta_productos:any=[];
  vector_aux:any=[];
  respuesta_fav:any=[];
  id_cliente:string="";

  constructor(private servfact:MisFacturasService) { }

  ngOnInit(): void {
    let a = localStorage.getItem("credenciales");
    if (a != null) {
      this.credenciales = JSON.parse(a);
      this.id_cliente = this.credenciales.user;
    }
    this.get_facturas();
  }

  get_facturas() {
    this.servfact.get_facturas(this.id_cliente).subscribe(
      result=>{console.log(result)
               if(result!=null){
                console.log("se obtuvieron las facturas.");
                this.respuesta_productos = result;
                let i = 0;
                while (this.respuesta_productos.result[i] != undefined) {
                  this.vector_aux.push([this.respuesta_productos.result[i].id_factura,this.respuesta_productos.result[i].fecha.substring(0, 10),this.respuesta_productos.result[i].total,this.respuesta_productos.result[i].NIT,this.respuesta_productos.result[i].Direccion_De_Envio,"http://34.121.67.41:7003/factura"+this.respuesta_productos.result[i].id_factura+".pdf"]);
                  i++;
                } 
               }else{
                alert("No se obtuvieron las facturas");

               }
      },
      error=>{console.log(error)
      });
  }

}
