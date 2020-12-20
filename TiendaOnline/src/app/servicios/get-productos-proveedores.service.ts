import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProductosProveedoresService {

  constructor(private http:HttpClient) {  }
  API_URI='http://34.121.67.41:4003/MostrarProductos';

  get_productos(){

    return this.http.post(`${this.API_URI}`,{id:1});
}
}
