import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductosClienteService {

  constructor(private http:HttpClient) {  }
  API_URI='http://34.121.67.41:5003/MostrarProductosCliente';

  get_productos(id:string){

    return this.http.post(`${this.API_URI}`,{id:id});
    
  }
}
