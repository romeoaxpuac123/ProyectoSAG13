import { Component, OnInit } from '@angular/core';
import {ProductosClienteService} from "../servicios/productos-cliente.service";
import { AgregarAlCarritoService } from '../servicios/agregar-al-carrito.service';
import { AgregarAFavoritosService } from '../servicios/agregar-a-favoritos.service';
@Component({
  selector: 'app-productos-cliente',
  templateUrl: './productos-cliente.component.html',
  styleUrls: ['./productos-cliente.component.css']
})
export class ProductosClienteComponent implements OnInit {
  
  credenciales:any=[];
  respuesta_productos:any=[];
  vector_aux:any=[];
  id_cliente:string="";

  constructor(private servprod:ProductosClienteService,private addCarrito: AgregarAlCarritoService, private addFavoritos: AgregarAFavoritosService) { }
  
  ngOnInit(): void {
    let a = localStorage.getItem("credenciales");
    if (a != null) {
      this.credenciales = JSON.parse(a);
      this.id_cliente = this.credenciales.user;
    }
    this.solicitarProductos();
  }

  solicitarProductos() {
    this.servprod.get_productos(this.id_cliente).subscribe(
      result=>{console.log(result)
               if(result!=null){
                console.log("se obtuvieron los productos.");
                this.respuesta_productos = result;
                let i = 0;
                while (this.respuesta_productos.result[i] != undefined) {
                  this.vector_aux.push([this.respuesta_productos.result[i].id_Producto_Cliente,this.respuesta_productos.result[i].Nombre, this.respuesta_productos.result[i].Precio_Venta, this.respuesta_productos.result[i].stock,this.respuesta_productos.result[i].categoria, this.respuesta_productos.result[i].imagen, this.respuesta_productos.result[i].precio_final, this.respuesta_productos.result[i].id_cliente,  this.respuesta_productos.result[i].precio_subaste, this.respuesta_productos.result[i].estado]);
                  i++;
                } 
               }else{
                alert("No se obtuvieron productos");

               }
      },
      error=>{console.log(error)
      });
  }


}
