import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteActualizarProductoService } from '../servicios/cliente-actualizar-producto.service';

@Component({
  selector: 'app-cliente-actualizar-producto',
  templateUrl: './cliente-actualizar-producto.component.html',
  styleUrls: ['./cliente-actualizar-producto.component.css']
})
export class ClienteActualizarProductoComponent implements OnInit {

  constructor(private router: Router,private serv_add_prod:ClienteActualizarProductoService) { }
  listainfo:any=[];
  id:string="";
  nombre:string="";
  precio_venta:string="0";
  stock:string="";
  categoria:string="";
  imagen:string="";

  precio_subaste:string="0";
  estado:string="";
  vender:boolean=false;
  subastar:boolean=false;

  id_cliente:string="";

  placeholders = {
    'id':'Código de producto',
    'nombre': 'Nombre del producto',
    'precio_venta': 'Precio del producto',
    'stock':'Cantidad de stock',
    'categoria': 'Categoria',
    'imagen': 'URL imagen',
    'precio_subaste':'Precio inicial de subasta'
  };


  ngOnInit(): void {
  }

  actualizarProducto(){

    if(this.vender && this.subastar){
      this.estado="3";
    }else if(this.subastar){
      this.estado="2";
    }else if(this.vender){
      this.estado="1";
    }else{
      alert("No ha seleccionado una opción de venta o subasta.");
      return;
    }
    //alert("valor de estado: "+this.estado);
    let a = localStorage.getItem("credenciales");
    if(a!=null)
      this.listainfo=JSON.parse(a);
      this.id_cliente=this.listainfo.user;

    //this.nombreRecibido = this.user;
    //this.passRecibida = this.pass;
    this.serv_add_prod.actualizar_producto(this.id,this.nombre,this.precio_venta,this.stock,this.categoria,this.imagen,this.id_cliente,this.precio_subaste,this.estado).subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo.msg);
               if(this.listainfo.msg==true){
                  alert("Producto actualizado con éxito.");
                  window.location.reload();
               }else{
                alert("Hubo un problema.");

               }
      },
      error=>{console.log(error)
      });
  }

}
