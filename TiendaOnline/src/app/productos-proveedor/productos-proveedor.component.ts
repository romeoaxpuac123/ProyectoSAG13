import { Component, OnInit } from '@angular/core';
import {ProductosProveedorService} from "../servicios/productos-proveedor.service";
import {SubastasService} from "../servicios/subastas.service";
@Component({
  selector: 'app-productos-proveedor',
  templateUrl: './productos-proveedor.component.html',
  styleUrls: ['./productos-proveedor.component.css']
})
export class ProductosProveedorComponent implements OnInit {
  listainfo: any = [];
  respuesta_productos: any = [];
  vector_aux: any = [];
  respuesta_sub: any = [];
  credenciales:any=[];
  id_proveedor:string="";
  acumulador:string="";
  constructor(private servprod:ProductosProveedorService,private servsub:SubastasService) { }

  ngOnInit(): void {
    let a = localStorage.getItem("credenciales");
    if(a!=null)
      this.credenciales=JSON.parse(a);
      this.id_proveedor=this.credenciales.user;
      this.solicitarProductos();
      
  }
  solicitarProductos() {
    this.servprod.get_productos(this.id_proveedor).subscribe(
      result=>{console.log(result)
               //console.log(this.listainfo.msg);
               if(result!=null){
                this.respuesta_productos=result;
                console.log(this.listainfo);
                let i = 0;
          while (this.respuesta_productos.result[i] != undefined) {
            this.vector_aux.push([this.respuesta_productos.result[i].Nombre, this.respuesta_productos.result[i].Precio_Venta, this.respuesta_productos.result[i].categoria, this.respuesta_productos.result[i].estado, this.respuesta_productos.result[i].id_Producto, this.respuesta_productos.result[i].id_proveedor, this.respuesta_productos.result[i].imagen, this.respuesta_productos.result[i].precio_final, this.respuesta_productos.result[i].precio_subaste, this.respuesta_productos.result[i].stock]);
            i++;
          }
               }else{
                alert("No se obtuvieron productos");

               }
      },
      error=>{console.log(error)
      });
  }


  cerrar_subasta(Nombre:string,id_Producto:string,cantidad:string,precio:string){
    
    this.servsub.cerrar_apuesta(Nombre,id_Producto,cantidad,precio).subscribe(
      result=>{console.log(result)
               //console.log(this.listainfo.msg);
               if(result!=null){
                this.respuesta_sub=result;
                console.log(this.respuesta_sub);
                
               }else{
                alert("Algo salio mal");

               }
      },
      error=>{console.log(error)
      });



  }

}
