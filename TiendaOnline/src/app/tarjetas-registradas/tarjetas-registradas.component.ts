import { Component, OnInit } from '@angular/core';
import { TarjetasRegistradasService } from '../servicios/tarjetas-registradas.service';
@Component({
  selector: 'app-tarjetas-registradas',
  templateUrl: './tarjetas-registradas.component.html',
  styleUrls: ['./tarjetas-registradas.component.css']
})
export class TarjetasRegistradasComponent implements OnInit {
  listainfo:any=[];
  credenciales:any=[];
  id_cliente:string="";
  acumulador:string="";
  
  constructor(private serv_tarjetas:TarjetasRegistradasService) { }

  ngOnInit(): void {
    let sesion = localStorage.getItem("credenciales");
    if(sesion!=null)
      this.credenciales=JSON.parse(sesion);
      this.id_cliente=this.credenciales.user;
    this.obtener_Tarjeta();
  }

  obtener_Tarjeta() {
    
    this.serv_tarjetas.obtener_tarjetas(this.id_cliente).subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo);
               if(this.listainfo!=null){
                 this.crear_grid();
               }else{
                alert("Hubo un problema");

               }
      },
      error=>{console.log(error)
      });
     
  }

  crear_grid(){
    this.acumulador="";
      let i=0;
      
      this.acumulador+="<table class=\"table table-striped\">"+"\n";
      this.acumulador+="<thead>"+"\n";
      this.acumulador+="<tr>"+"\n";
      this.acumulador+="<th>"+"\n";   
        this.acumulador+="Código";  
      this.acumulador+="</th>"+"\n";

      this.acumulador+="<th>"+"\n";   
        this.acumulador+="Número de tarjeta";  
      this.acumulador+="</th>"+"\n";
    this.acumulador+="</tr>"+"\n";
    this.acumulador+="</thead>"+"\n";

      while(this.listainfo.result[i]!=undefined){
        console.log(this.listainfo.result[i].Nombre);
      
      this.acumulador+="<tr>"+"\n";
        this.acumulador+="<td>"+"\n";   
          this.acumulador+=this.listainfo.result[i].id_tarjeta;  
        this.acumulador+="</td>"+"\n";

        this.acumulador+="<td>"+"\n";   
          this.acumulador+=this.listainfo.result[i].No_Tarjeta;  
        this.acumulador+="</td>"+"\n";
      this.acumulador+="</tr>"+"\n";
      
      i++;
      }
      
      this.acumulador+="</table>"+"\n";
  
      
  
    }

}
