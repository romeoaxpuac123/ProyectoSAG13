import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EliminarTarjetaService {

  constructor(private http:HttpClient) {  }
  API_URI='http://35.193.123.113:5003/EliminarTarjeta';

  eliminar_tarjeta(No_Tarjeta:string,id_cliente:string){

    return this.http.post(`${this.API_URI}`,{No_Tarjeta:No_Tarjeta,id_cliente:id_cliente});
    
  }
}
