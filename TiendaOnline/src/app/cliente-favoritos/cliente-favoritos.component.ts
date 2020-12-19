import { Component, OnInit } from '@angular/core';
import {ClienteFavoritosService} from "../servicios/cliente-favoritos.service";
@Component({
  selector: 'app-cliente-favoritos',
  templateUrl: './cliente-favoritos.component.html',
  styleUrls: ['./cliente-favoritos.component.css']
})
export class ClienteFavoritosComponent implements OnInit {

  credenciales:any=[];
  respuesta_productos:any=[];
  vector_aux:any=[];
  respuesta_fav:any=[];
  id_cliente:string="";

  constructor(private servfav:ClienteFavoritosService) { }
  
  ngOnInit(): void {
    let a = localStorage.getItem("credenciales");
    if (a != null) {
      this.credenciales = JSON.parse(a);
      this.id_cliente = this.credenciales.user;
    }
    this.solicitarProductos();
  }

  solicitarProductos() {
    this.servfav.get_productos(this.id_cliente).subscribe(
      result=>{console.log(result)
               if(result!=null){
                console.log("se obtuvieron los productos.");
                this.respuesta_productos = result;
                let i = 0;
                while (this.respuesta_productos.result[i] != undefined) {
                  this.vector_aux.push([this.respuesta_productos.result[i].id_Favorito,this.respuesta_productos.result[i].Nombre, this.respuesta_productos.result[i].precio_venta, this.respuesta_productos.result[i].id_Producto,this.respuesta_productos.result[i].id_Producto_Cliente, this.respuesta_productos.result[i].id_cliente]);
                  i++;
                } 
               }else{
                alert("No se obtuvieron productos");

               }
      },
      error=>{console.log(error)
      });
  }

  eliminar_fav(id_favorito:string) {

    if (confirm('¿Eliminar de favoritos?')) {
      this.servfav.eliminar_fav(id_favorito).subscribe(
        result=>{console.log(result)
          this.respuesta_fav=result;
          
          if(this.respuesta_fav.msg==true){
            window.location.reload();
  
          }else{
           alert("No se eliminó");
  
          }
        },
        error=>{console.log(error)
        });
    }
    }

    


}
