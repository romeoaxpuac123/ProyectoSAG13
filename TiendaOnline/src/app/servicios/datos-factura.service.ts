import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosFacturaService {

  constructor(private http:HttpClient) {  }
  API_URI='http://www.sa-proyecto.tk/api/Factura';
  
  enviar_datos(id:string,direccion:string,nit:string,Estado_Final:string){
    console.log("id "+id+"direccion "+direccion+"nit "+nit+"estado final "+Estado_Final);
    return this.http.post(`${this.API_URI}`,{id:id,direccion:direccion,nit:nit,EstadoFinal:Estado_Final});
    
  }
}
