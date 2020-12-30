import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AgregarTarjetaService {

  constructor(private http:HttpClient) {  }
  API_URI='http://www.sa-proyecto.tk/api/RegistrarTarjeta';

  guardar_tarjeta(No_Tarjeta:string,id_cliente:string){

    return this.http.post(`${this.API_URI}`,{No_Tarjeta:No_Tarjeta,id_cliente:id_cliente});
    
  }
}
