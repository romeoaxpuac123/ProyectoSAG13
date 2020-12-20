import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosFacturaService {

  constructor(private http:HttpClient) {  }
  API_URI='http://34.121.67.41:7003/Factura';
  
  enviar_datos(id:string,direccion:string,nit:string){

    return this.http.post(`${this.API_URI}`,{id:id,direccion:direccion,nit:nit});
    
  }
}
