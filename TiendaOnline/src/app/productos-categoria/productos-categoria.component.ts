import { Component, OnInit } from '@angular/core';
import { ProductosCategoriaService } from "../servicios/productos-categoria.service";
@Component({
  selector: 'app-productos-categoria',
  templateUrl: './productos-categoria.component.html',
  styleUrls: ['./productos-categoria.component.css']
})
export class ProductosCategoriaComponent implements OnInit {
  categoria:string="";
  categoria_aux="";
  listainfo: any = [];
  respuesta_productos: any = [];
  
  placeholders = {
    'categoria': 'Palabra clave de categoria'
  };

  constructor(private servprod: ProductosCategoriaService) { }
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

  filtrar(){
    window.location.reload();
  }

  solicitarProductos() {
    let a = prompt("Ingrese una categoría", "Zapatos");
    if(a!=null){
      this.categoria=a;
    }
    this.servprod.get_productos(this.categoria).subscribe(
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
  

}
