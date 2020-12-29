import { Component, OnInit } from '@angular/core';
import { GetProductosClientesService } from "../servicios/get-productos-clientes.service";
import { AgregarAlCarritoService } from '../servicios/agregar-al-carrito.service';
import { AgregarAFavoritosService } from '../servicios/agregar-a-favoritos.service';

@Component({
  selector: 'app-comprar-a-clientes',
  templateUrl: './comprar-a-clientes.component.html',
  styleUrls: ['./comprar-a-clientes.component.css']
})
export class ComprarAClientesComponent implements OnInit {
  listainfo: any = [];
  respuesta_productos: any = [];
  respuesta_carrito: any = [];
  respuesta_fav: any = [];
  constructor(private servprod: GetProductosClientesService, private addCarrito: AgregarAlCarritoService, private addFavoritos: AgregarAFavoritosService) { }
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

  }

  solicitarProductos() {
    this.servprod.get_productos().subscribe(
      result => {
        if (result != null) {
          console.log("se obtuvieron los productos.");
          this.respuesta_productos = result;
          let i = 0;
          while (this.respuesta_productos.result[i] != undefined) {
            this.vector_aux.push([this.respuesta_productos.result[i].id_Producto_Cliente,this.respuesta_productos.result[i].Nombre, this.respuesta_productos.result[i].Precio_Venta, this.respuesta_productos.result[i].stock,this.respuesta_productos.result[i].categoria, this.respuesta_productos.result[i].imagen, this.respuesta_productos.result[i].precio_final, this.respuesta_productos.result[i].id_cliente,  this.respuesta_productos.result[i].precio_subaste, this.respuesta_productos.result[i].estado]);
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
          alert("Se agrego correctamente.");
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
