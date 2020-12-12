import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EliminarProductoService {

  constructor(private http:HttpClient) {  }
  API_URI='http://35.193.123.113:4003/EliminarProducto';

  eliminar_producto(id:string){

    return this.http.post(`${this.API_URI}`,{id:id});
    
  }
}
