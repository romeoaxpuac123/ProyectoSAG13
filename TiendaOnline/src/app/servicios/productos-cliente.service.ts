import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductosClienteService {

  constructor(private http:HttpClient) {  }
  API_URI='http://35.193.123.113:4003/MostrarProductos';

  get_productos(){

    return this.http.post(`${this.API_URI}`,{id:1});
    
  }
}
