import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TarjetasRegistradasService {

  
  constructor(private http:HttpClient) {  }
  API_URI='http://34.121.67.41:5003/Tarjetas';

  obtener_tarjetas(id_cliente:string){

    return this.http.post(`${this.API_URI}`,{id_cliente:id_cliente});
    
  }
}
