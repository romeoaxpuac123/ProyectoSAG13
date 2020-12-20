import { Component, OnInit } from '@angular/core';
import {CarritoService} from "../servicios/carrito.service";
import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  credenciales:any=[];
  respuesta_productos:any=[];
  vector_aux:any=[];
  respuesta_carrito:any=[];
  respuesta_stock:any=[];
  id_cliente:string="";

  constructor(private servcarrito:CarritoService, private router:Router) { }
  
  ngOnInit(): void {
    let a = localStorage.getItem("credenciales");
    if (a != null) {
      this.credenciales = JSON.parse(a);
      this.id_cliente = this.credenciales.user;
    }
    this.solicitarProductos();
  }

  solicitarProductos() {
    this.servcarrito.get_productos(this.id_cliente).subscribe(
      result=>{console.log(result)
               if(result!=null){
                console.log("se obtuvieron los productos.");
                this.respuesta_productos = result;
                let i = 0;
                while (this.respuesta_productos.result[i] != undefined) {
                  this.vector_aux.push([this.respuesta_productos.result[i].id_carrito,this.respuesta_productos.result[i].id_cliente,this.respuesta_productos.result[i].Nombre,this.respuesta_productos.result[i].id_Producto,this.respuesta_productos.result[i].id_Producto_Cliente,this.respuesta_productos.result[i].cantidad,this.respuesta_productos.result[i].subtotal]);
                  i++;
                } 
               }else{
                alert("No se obtuvieron productos");

               }
      },
      error=>{console.log(error)
      });
  }

  eliminar(id_favorito:string) {

    if (confirm('¿Eliminar del carrito?')) {
      this.servcarrito.eliminar(id_favorito).subscribe(
        result=>{console.log(result)
          this.respuesta_carrito=result;
          
          if(this.respuesta_carrito.msg==true){
            window.location.reload();
  
          }else{
           alert("No se eliminó");
  
          }
        },
        error=>{console.log(error)
        });
    }
    }


  verificar_stock() {

    if (confirm('¿Confirmar compra?')) {
      this.servcarrito.verificar_stock(this.id_cliente).subscribe(
        result=>{console.log(result)
          this.respuesta_stock=result;
      
          if(this.respuesta_stock.msg==true){
           this.router.navigate(['/datos-factura']);
          }else{
           alert("No hay existencias suficientes de "+this.respuesta_stock.name);
  
          }
        },
        error=>{console.log(error)
        });
    }
    }

}
