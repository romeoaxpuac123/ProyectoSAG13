import { Component, OnInit } from '@angular/core';
import {DashboardComprasService} from "../servicios/dashboard-compras.service";
@Component({
  selector: 'app-pantalla-admin',
  templateUrl: './pantalla-admin.component.html',
  styleUrls: ['./pantalla-admin.component.css']
})
export class PantallaAdminComponent implements OnInit {
  
  
  credenciales:any=[];
  respuesta_ventas:any=[];
  vector_aux:any=[];
  respuesta_estado:any=[];
  

  constructor(private servdash:DashboardComprasService) { }

  ngOnInit(): void {
    
    this.get_ventas();
  }

  get_ventas() {
    this.servdash.get_compras("1").subscribe(
      result=>{console.log(result)
               if(result!=null){
                console.log("se obtuvieron las compras.");
                this.respuesta_ventas = result;
                let i = 0;
                while (this.respuesta_ventas.result[i] != undefined) {
                  this.vector_aux.push([this.respuesta_ventas.result[i].Orden,this.respuesta_ventas.result[i].Cliente,this.respuesta_ventas.result[i].NIT,this.respuesta_ventas.result[i].total,this.respuesta_ventas.result[i].EstadoActual]);
                  i++;
                } 
               }else{
                alert("No se obtuvieron las compras");

               }
      },
      error=>{console.log(error)
      });
  }

  seleccionar_estado(id:string,estado:string){
    let estado_reescrito:string="";
    if(estado=="COMPRADO"){
      estado_reescrito="\"Comprado\"";
    } else if(estado=="DESPACHADO"){
      estado_reescrito="\"Despachado\"";
    }else if (estado=="EN_TIENDA"){
      estado_reescrito="\"En tienda\"";
    } else if (estado=="ENTREGADO"){
      estado_reescrito="\"Entregado\"";
    }

    if (confirm('cambiar de estado a '+estado_reescrito)) {
      

    this.servdash.cambiar_estado(id,estado).subscribe(
      result=>{console.log(result)
               if(result!=null){
                this.respuesta_estado = result;
                if(this.respuesta_estado.msg==true){
                  alert("Estado cambiado");  
                  window.location.reload();
                } 
               }else{
                alert("Ocurrio un problema");

               }
      },
      error=>{console.log(error)
      });


    }
  }

}
