import { Component, OnInit } from '@angular/core';
import {EstadoPedidoService} from "../servicios/estado-pedido.service";
@Component({
  selector: 'app-estado-pedido',
  templateUrl: './estado-pedido.component.html',
  styleUrls: ['./estado-pedido.component.css']
})
export class EstadoPedidoComponent implements OnInit {

  
  credenciales:any=[];
  respuesta_productos:any=[];
  vector_aux:any=[];
  respuesta_fav:any=[];
  id_cliente:string="";
  idpedido:string="";
  acumulador: string = "";
  placeholders = {
    'idpedido': 'Código del pedido'
  };

  constructor(private servpedido:EstadoPedidoService) { }

  ngOnInit(): void {
    let a = localStorage.getItem("credenciales");
    if (a != null) {
      this.credenciales = JSON.parse(a);
      this.id_cliente = this.credenciales.user;
    }
    
  }

  get_pedido() {
    
    this.acumulador="";

    this.servpedido.get_pedido(this.id_cliente,this.idpedido).subscribe(
      result=>{console.log(result)
               if(result!=null){
                console.log("se obtuvo el pedido.");
                this.respuesta_productos = result;
                let i = 0;
                while (this.respuesta_productos.result[i] != undefined) {
                  if(i==0){
                    this.acumulador+="<div class=\"card\" style=\"padding:20px; \">";
                    this.acumulador+="<div class=\"card-body\">";
                    this.acumulador+="<p class=\"card-text\">"+"Estado Actual: "+this.respuesta_productos.result[i].EstadoActual+"</p>";
                    this.acumulador+="<p class=\"card-text\">"+"Factura: "+this.respuesta_productos.result[i].id_factura+"</p>";
                    this.acumulador+="<p class=\"card-text\">"+"Total: Q."+this.respuesta_productos.result[i].total+"</p>";
                    this.acumulador+="</div>";
                    this.acumulador+="</div>";
                    this.acumulador+="<br>";
                    this.acumulador+="<table class=\"table table-striped\">";
                    this.acumulador+="<thead>";
                    this.acumulador+="<tr>";
                    this.acumulador+="<th>Código de producto</th>"
                    this.acumulador+="<th>Cantidad</th>"
                    this.acumulador+="</tr>";
                    this.acumulador+="</thead>";
                    this.acumulador+="<tbody>";
                   
                    
                  }
                    this.acumulador+="<tr>";
                    if(this.respuesta_productos.result[i].id_Producto!=null){
                      this.acumulador+="<td>"+this.respuesta_productos.result[i].id_Producto+"</td>";
                    }else{
                      this.acumulador+="<td>"+this.respuesta_productos.result[i].id_Producto_Cliente+"</td>";
                    }
                    this.acumulador+="<td>"+this.respuesta_productos.result[i].cantidad+"</td>";
                    this.acumulador+="</tr>";
                  i++;
                }
                this.acumulador+="</tbody>";
                this.acumulador+="</table>";
               }else{
                alert("No se obtuvo el pedido.");

               }
      },
      error=>{console.log(error)
      });
  }
}
