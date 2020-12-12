import { Component, OnInit } from '@angular/core';
import {ProductosClienteService} from "../servicios/productos-cliente.service";
@Component({
  selector: 'app-productos-cliente',
  templateUrl: './productos-cliente.component.html',
  styleUrls: ['./productos-cliente.component.css']
})
export class ProductosClienteComponent implements OnInit {
  listainfo:any=[];
  credenciales:any=[];
  id_proveedor:string="";
  acumulador:string="";
  constructor(private servprod:ProductosClienteService) { }
  
  ngOnInit(): void {
    this.solicitarProductos();
  }

  solicitarProductos() {
    this.servprod.get_productos().subscribe(
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
