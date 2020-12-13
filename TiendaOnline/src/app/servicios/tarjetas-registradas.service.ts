import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TarjetasRegistradasService {

  
  constructor(private http:HttpClient) {  }
  API_URI='http://35.193.123.113:5003/Tarjetas';

  obtener_tarjetas(id_cliente:string){

    return this.http.post(`${this.API_URI}`,{id_cliente:id_cliente});
    
  }
}
