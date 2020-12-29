import { Component, OnInit } from '@angular/core';
import {VentasProveedorService} from "../servicios/ventas-proveedor.service";
@Component({
  selector: 'app-ventas-proveedor',
  templateUrl: './ventas-proveedor.component.html',
  styleUrls: ['./ventas-proveedor.component.css']
})
export class VentasProveedorComponent implements OnInit {



  credenciales:any=[];
  respuesta_productos:any=[];
  vector_aux:any=[];
  respuesta_fav:any=[];
  id_proveedor:string="";

  constructor(private servventasprov:VentasProveedorService) { }

  ngOnInit(): void {
    let a = localStorage.getItem("credenciales");
    if (a != null) {
      this.credenciales = JSON.parse(a);
      this.id_proveedor = this.credenciales.user;
    }
    this.get_facturas();
  }

  get_facturas() {
    this.servventasprov.get_ventas(this.id_proveedor).subscribe(
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
