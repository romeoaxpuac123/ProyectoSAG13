import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MisFacturasService {

  constructor(private http:HttpClient) {  }
  API_URI='http://34.121.67.41:8003/MisFacturas';
  
  get_facturas(id:string){

    return this.http.post(`${this.API_URI}`,{id:id});
    
  }

  
}
