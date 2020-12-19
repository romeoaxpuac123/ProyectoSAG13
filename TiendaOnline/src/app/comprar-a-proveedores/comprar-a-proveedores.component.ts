import { Component, OnInit } from '@angular/core';
import { GetProductosProveedoresService } from "../servicios/get-productos-proveedores.service";
import { AgregarAlCarritoService } from '../servicios/agregar-al-carrito.service';
import { AgregarAFavoritosService } from '../servicios/agregar-a-favoritos.service';
@Component({
  selector: 'app-comprar-a-proveedores',
  templateUrl: './comprar-a-proveedores.component.html',
  styleUrls: ['./comprar-a-proveedores.component.css']
})
export class ComprarAProveedoresComponent implements OnInit {
  listainfo: any = [];
  respuesta_productos: any = [];
  respuesta_carrito: any = [];
  respuesta_fav: any = [];
  constructor(private servprod: GetProductosProveedoresService, private addCarrito: AgregarAlCarritoService, private addFavoritos: AgregarAFavoritosService) { }
  result: any = [];
  vector_aux: any = [];
  cont = 0;
  id_cliente = "";
  ngOnInit(): void {

    let a = localStorage.getItem("credenciales");
    if (a != null) {
      this.listainfo = JSON.parse(a);
      this.id_cliente = this.listainfo.user;
    }

    this.solicitarProductos();
    console.log(this.listainfo);
    console.log(this.result);

  }

  solicitarProductos() {
    this.servprod.get_productos().subscribe(
      result => {
        if (result != null) {
          console.log("se obtuvieron los productos.");
          this.respuesta_productos = result;
          let i = 0;
          while (this.respuesta_productos.result[i] != undefined) {
            this.vector_aux.push([this.respuesta_productos.result[i].Nombre, this.respuesta_productos.result[i].Precio_Venta, this.respuesta_productos.result[i].categoria, this.respuesta_productos.result[i].estado, this.respuesta_productos.result[i].id_Producto, this.respuesta_productos.result[i].id_proveedor, this.respuesta_productos.result[i].imagen, this.respuesta_productos.result[i].precio_final, this.respuesta_productos.result[i].precio_subaste, this.respuesta_productos.result[i].stock]);
            i++;
          }
        } else {
          alert("No se obtuvieron productos");
        }
      },
      error => {
        console.log(error)
      });
  }
  //Agregar un producto al carrito
  comprar(id_cliente: string, Nombre: string, id_Producto: string, precio: string) {
    let cantidad = "";
    let a = prompt("Ingrese la cantidad", "1");
    if (a != null) {
      cantidad = a;
    }
    this.addCarrito.agregar_carrito(id_cliente, Nombre, id_Producto, cantidad, precio).subscribe(
      result => {
        this.respuesta_carrito = result;
        console.log(this.respuesta_carrito);
        if (this.respuesta_carrito.msg == true) {
          alert("todo tranquilo todo normal");
        } else {
          alert("Hubo un error");

        }
      },
      error => {
        console.log(error)
      });

  }
  //Agrega un producto a favoritos
  agregar_favoritos(id_cliente: string, Nombre: string, precio_venta: string, id_Producto: string) {
    this.addFavoritos.agregar_favoritos(id_cliente, Nombre, precio_venta, id_Producto).subscribe(
      result => {
        this.respuesta_fav = result;
        console.log(this.respuesta_fav);
        if (this.respuesta_fav.msg == true) {
          alert("Producto agregado a favoritos ☆");
        } else {
          alert("Hubo un error");

        }
      },
      error => {
        console.log(error)
      });

  }

}
