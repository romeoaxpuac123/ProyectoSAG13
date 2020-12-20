import { Component, OnInit } from '@angular/core';
import {MisComprasService} from "../servicios/mis-compras.service";
@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent implements OnInit {

  credenciales:any=[];
  respuesta_productos:any=[];
  vector_aux:any=[];
  respuesta_fav:any=[];
  id_cliente:string="";

  constructor(private servcomp:MisComprasService) { }

  ngOnInit(): void {
    let a = localStorage.getItem("credenciales");
    if (a != null) {
      this.credenciales = JSON.parse(a);
      this.id_cliente = this.credenciales.user;
    }
    this.get_facturas();
  }

  get_facturas() {
    this.servcomp.get_compras(this.id_cliente).subscribe(
      result=>{console.log(result)
               if(result!=null){
                console.log("se obtuvieron las compras.");
                this.respuesta_productos = result;
                let i = 0;
                while (this.respuesta_productos.result[i] != undefined) {
                  this.vector_aux.push([this.respuesta_productos.result[i].id_venta,this.respuesta_productos.result[i].id_factura,this.respuesta_productos.result[i].id_Producto,this.respuesta_productos.result[i].id_Producto_Cliente,this.respuesta_productos.result[i].cantidad,this.respuesta_productos.result[i].subtotal]);
                  i++;
                } 
               }else{
                alert("No se obtuvieron las compras");

               }
      },
      error=>{console.log(error)
      });
  }

}
