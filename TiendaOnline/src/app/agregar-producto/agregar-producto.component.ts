import { Component, OnInit } from '@angular/core';
import { AgregarProductoService } from '../servicios/agregar-producto.service';
import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  
  constructor(private router: Router,private serv_add_prod:AgregarProductoService) { }

  listainfo:any=[];

  nombre:string="";
  precio_venta:string="";
  stock:string="";
  categoria:string="";
  imagen:string="";

  id_proveedor:string="";

  placeholders = {
    'nombre': 'Nombre del producto',
    'precio_venta': 'Precio del producto',
    'stock':'Cantidad de stock',
    'categoria': 'Categoria',
    'imagen': 'URL imagen'
  };

  ngOnInit(): void {
    
  }

  registrarProducto(){
    let a = localStorage.getItem("credenciales");
    if(a!=null)
      this.listainfo=JSON.parse(a);
      this.id_proveedor=this.listainfo.user;

    //this.nombreRecibido = this.user;
    //this.passRecibida = this.pass;
    this.serv_add_prod.agregar_producto(this.nombre,this.precio_venta,this.stock,this.categoria,this.imagen,this.id_proveedor).subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo.msg);
               if(this.listainfo.msg==true){  
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
