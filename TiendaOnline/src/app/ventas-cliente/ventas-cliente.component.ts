import { Component, OnInit } from '@angular/core';
import {VentasClienteService} from "../servicios/ventas-cliente.service";
@Component({
  selector: 'app-ventas-cliente',
  templateUrl: './ventas-cliente.component.html',
  styleUrls: ['./ventas-cliente.component.css']
})
export class VentasClienteComponent implements OnInit {

  credenciales:any=[];
  respuesta_productos:any=[];
  vector_aux:any=[];
  respuesta_fav:any=[];
  id_cliente:string="";

  constructor(private servventas:VentasClienteService) { }

  ngOnInit(): void {
    let a = localStorage.getItem("credenciales");
    if (a != null) {
      this.credenciales = JSON.parse(a);
      this.id_cliente = this.credenciales.user;
    }
    this.get_facturas();
  }

  get_facturas() {
    this.servventas.get_ventas(this.id_cliente).subscribe(
      result=>{console.log(result)
               if(result!=null){
                console.log("se obtuvieron las ventas.");
                this.respuesta_productos = result;
                let i = 0;
                while (this.respuesta_productos.result[i] != undefined) {
                  this.vector_aux.push([this.respuesta_productos.result[i].id_venta,this.respuesta_productos.result[i].id_factura,this.respuesta_productos.result[i].id_Producto,this.respuesta_productos.result[i].id_Producto_Cliente,this.respuesta_productos.result[i].cantidad,this.respuesta_productos.result[i].subtotal]);
                  i++;
                } 
               }else{
                alert("No se obtuvieron las ventas.");

               }
      },
      error=>{console.log(error)
      });
  }

}
