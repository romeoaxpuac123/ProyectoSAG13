import { Component, OnInit } from '@angular/core';
import { UVerProductosService } from '../servicios/u-ver-productos.service';
@Component({
  selector: 'app-u-ver-productos',
  templateUrl: './u-ver-productos.component.html',
  styleUrls: ['./u-ver-productos.component.css']
})
export class UVerProductosComponent implements OnInit {
  acumulador:string="";

  apis:any=[];
  apis_compra:any=[];
  grupo:number=0;
  id:string="";

  listainfo: any = [];
  respuesta_productos: any = [];
  respuesta_compra: any = [];
  constructor(private servprod: UVerProductosService) { }
  result: any = [];
  vector_aux: any = [];
  cont = 0;
  id_cliente = "";
  ngOnInit(): void {

   // id cliente
   let a=localStorage.getItem("id");
   if(a!=null){
     this.id=a;
   }
   //grupo
   this.grupo=Number(localStorage.getItem("grupo"));
   this.apis=["http://busg1.us-e2.cloudhub.io/ver-productos",
             "",
             "http://35.206.98.190/ver-productos",
             "http://esb4.djgg.ml:3030/ver-productos",
             "http://34.123.238.63:8280/services/integrador/ver-productos",
             "http://35.184.63.236:3004/ver-productos",
             "http://68.183.102.104:3000/ver-productos",
             "http://35.232.242.252:9999/ver-productos",
             "http://sa-g9.us-e2.cloudhub.io/ver-productos",
             "http://34.73.157.172:5005/ver-productos",
             "http://soagrupo11.us-e2.cloudhub.io/ver-productos"];

 this.apis_compra=["http://busg1.us-e2.cloudhub.io/realizar-compra",
             "",
             "http://35.206.98.190/realizar-compra",
             "http://esb4.djgg.ml:3030/realizar-compra",
             "http://34.123.238.63:8280/services/integrador/realizar-compra",
             "http://35.184.63.236:3004/realizar-compra",
             "http://68.183.102.104:3000/realizar-compra",
             "http://35.232.242.252:9999/realizar-compra",
             "http://sa-g9.us-e2.cloudhub.io/realizar-compra",
             "http://34.73.157.172:5005/realizar-compra",
             "http://soagrupo11.us-e2.cloudhub.io/realizar-compra"];          

    this.solicitarProductos();
    this.acumulador="";
    this.acumulador+="{";
    this.acumulador+="\"id_cliente\":"+this.id+","
    this.acumulador+="\"productos\":["
  }

  solicitarProductos() {
    this.servprod.get_productos(this.apis[this.grupo-1]).subscribe(
      result => {
        if (result != null) {
          console.log("se obtuvieron los productos.");
          this.respuesta_productos = result;
          let i = 0;
          while (this.respuesta_productos.data[i] != undefined) {
            this.vector_aux.push([this.respuesta_productos.data[i].id_producto,this.respuesta_productos.data[i].nombre, this.respuesta_productos.data[i].descripcion, this.respuesta_productos.data[i].stock,this.respuesta_productos.data[i].precio_venta, this.respuesta_productos.data[i].foto, this.respuesta_productos.data[i].fecha_subasta, this.respuesta_productos.data[i].precio_inicial_subasta,  this.respuesta_productos.data[i].precio_compralo_ahora]);
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
  
  seleccionar_producto(id_producto:string){
    let cantidad = "";
    let a = prompt("Ingrese la cantidad", "1");
    if (a != null) {
      cantidad = a;
    }
    this.acumulador+="{";
    this.acumulador+="\"id_producto\":"+id_producto+",";
    this.acumulador+="\"cantidad\":"+cantidad;
    this.acumulador+="},";
  }

  finalizar_compra(){
    this.acumulador=this.acumulador.substring(0, this.acumulador.length - 1);
    this.acumulador+="]}";

    this.servprod.comprar_productos(this.apis_compra[this.grupo-1],this.acumulador).subscribe(
      result => {
        if (result != null) {
          this.respuesta_compra = result;
          if(this.respuesta_compra.status="success"){
            alert("Compra exitosa");
            window.location.reload();
          
          }
        } else {
          alert("No se envio la compra");
        }
      },
      error => {
        console.log(error)
      });



  }

}
