import { Component, OnInit } from '@angular/core';
import { EliminarTarjetaService } from '../servicios/eliminar-tarjeta.service';
@Component({
  selector: 'app-eliminar-tarjeta',
  templateUrl: './eliminar-tarjeta.component.html',
  styleUrls: ['./eliminar-tarjeta.component.css']
})
export class EliminarTarjetaComponent implements OnInit {
  listainfo:any=[];
  credenciales:any=[];
  id_cliente:string="";
  No_Tarjeta:string="";
  
  placeholders = {
    'No_Tarjeta': 'Número de tarjeta',
  };


  constructor(private serv_del_tarjeta:EliminarTarjetaService) { }

  ngOnInit(): void {
    let sesion = localStorage.getItem("credenciales");
    if(sesion!=null)
      this.credenciales=JSON.parse(sesion);
      this.id_cliente=this.credenciales.user;
  }

  eliminar_Tarjeta() {
    
    this.serv_del_tarjeta.eliminar_tarjeta(this.No_Tarjeta,this.id_cliente).subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo.msg);
               if(this.listainfo.msg==true){
                alert("Tarjeta eliminada con éxito.");
                window.location.reload();
                //alert("usuario valido");

               }else{
                alert("Hubo un problema");

               }
      },
      error=>{console.log(error)
      });
      
  
    
  }

}
