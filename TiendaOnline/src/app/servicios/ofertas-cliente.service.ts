import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfertasClienteService {

  constructor(private http:HttpClient) { }

  API_URI='http://34.121.67.41:8003/MisApuestas';

  solicitar_ofertas(id_cliente:string){

    return this.http.post(`${this.API_URI}`,{id:id_cliente});
    
  }
}
