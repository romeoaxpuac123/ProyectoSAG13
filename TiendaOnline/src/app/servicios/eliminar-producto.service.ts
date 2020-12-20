import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EliminarProductoService {

  constructor(private http:HttpClient) {  }
  API_URI='http://34.121.67.41:4003/EliminarProducto';

  eliminar_producto(id:string){

    return this.http.post(`${this.API_URI}`,{id:id});
    
  }
}
