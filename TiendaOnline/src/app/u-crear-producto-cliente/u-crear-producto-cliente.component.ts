import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UCrearProductoClienteService } from '../servicios/u-crear-producto-cliente.service';
@Component({
  selector: 'app-u-crear-producto-cliente',
  templateUrl: './u-crear-producto-cliente.component.html',
  styleUrls: ['./u-crear-producto-cliente.component.css']
})
export class UCrearProductoClienteComponent implements OnInit {

  
  constructor(private router: Router,private serv_add_prod:UCrearProductoClienteService) { }

  listainfo:any=[];

  apis:any=[];
  grupo:number=0;
  id:string="";
  nombre:string="";
  descripcion:string="";
  stock:string="";
  precio_venta:string="";
  foto:string="";
  fecha_subasta:string="";
  precio_inicial_subasta:string="";
  precio_compralo_ahora:string="";


  placeholders = {
    'nombre': 'Nombre del producto',
    'descripcion':'Descripción',
    'stock':'Stock',
    'precio_venta':'Precio venta',
    'foto':'Fotografía',
    'fecha_subasta':'Fecha de subasta',
    'precio_inicial_subasta':'Precio inicial de subasta',
    'precio_compralo_ahora':'Precio compralo ahora',

  };

  ngOnInit(): void {
   // console.log(localStorage.getItem("credenciales"));
   let a=localStorage.getItem("id");
   if(a!=null){
     this.id=a;
   }
   this.grupo=Number(localStorage.getItem("grupo"));
   this.apis=["http://busg1.us-e2.cloudhub.io/crear-producto-cliente",
             "",
             "http://35.206.98.190/crear-producto-cliente",
             "http://esb4.djgg.ml:3030/crear-producto-cliente",
             "http://34.123.238.63:8280/services/integrador/crear-producto-cliente",
             "http://35.184.63.236:3004/crear-producto-cliente",
             "http://68.183.102.104:3000/crear-producto-cliente",
             "http://35.232.242.252:9999/crear-producto-cliente",
             "http://sa-g9.us-e2.cloudhub.io/crear-producto-cliente",
             "http://34.73.157.172:5005/crear-producto-cliente",
             "http://soagrupo11.us-e2.cloudhub.io/crear-producto-cliente"];
  }

  registrarProducto(){
  
    this.serv_add_prod.agregar_producto(this.apis[this.grupo-1],this.id,this.nombre,this.descripcion,this.stock,this.precio_venta,this.foto).subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo.msg);
               if(this.listainfo.status=="success"){  
                alert("Producto agregado con éxito.");
                window.location.reload();
               }else{
                alert("Hubo un problema.");

               }
      },
      error=>{console.log(error)
      });
  }


}
