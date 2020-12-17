import { Component, OnInit } from '@angular/core';
import {ProductosProveedorService} from "../servicios/productos-proveedor.service";
@Component({
  selector: 'app-productos-proveedor',
  templateUrl: './productos-proveedor.component.html',
  styleUrls: ['./productos-proveedor.component.css']
})
export class ProductosProveedorComponent implements OnInit {
  listainfo:any=[];
  credenciales:any=[];
  id_proveedor:string="";
  acumulador:string="";
  constructor(private servprod:ProductosProveedorService) { }

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
                this.listainfo=result;
                this.crear_grid();
               }else{
                alert("No se obtuvieron productos");

               }
      },
      error=>{console.log(error)
      });
  }

  crear_grid(){
  this.acumulador="";
    let i=0;
    let col=1;
    this.acumulador+="<table class=\"table table-striped\">"+"\n";
    
    while(this.listainfo.result[i]!=undefined){
      console.log(this.listainfo.result[i].Nombre);
    if(col==1){
      this.acumulador+="<tr>"+"\n";
    }
    this.acumulador+="<td>"+"\n";   
    this.acumulador+="<div class=\"card\">"+"\n";
    this.acumulador+="<img class=\"card-img-top\" src=\""+this.listainfo.result[i].imagen+"\" width=\"auto\" height=\"220px\" alt=\"\">"+"\n";
    this.acumulador+="<div class=\"card-body\">"+"\n";
    this.acumulador+="<p class=\"card-text\">"+this.listainfo.result[i].Nombre+"</p>"+"\n";
    this.acumulador+="<p class=\"card-text\">Código: "+this.listainfo.result[i].id_Producto+"</p>"+"\n";
    this.acumulador+="<p class=\"card-text\"> Venta Q."+this.listainfo.result[i].Precio_Venta+"</p>"+"\n";
    this.acumulador+="<p class=\"card-text\"> Público Q."+this.listainfo.result[i].precio_final+"</p>"+"\n";
    this.acumulador+="<p class=\"card-text\">Stock: "+this.listainfo.result[i].stock+"</p>"+"\n";
    this.acumulador+="<p class=\"card-text\">Estado: "+this.listainfo.result[i].estado+"</p>"+"\n";
    this.acumulador+="</div>"+"\n";
    this.acumulador+="</div>"+"\n";
    this.acumulador+="</td>"+"\n";
    if(col==5){
      this.acumulador+="</tr>"+"\n";
      col=0;
    }
    col++;
    i++;
    }
    
    this.acumulador+="</table>"+"\n";

    

  }

}
