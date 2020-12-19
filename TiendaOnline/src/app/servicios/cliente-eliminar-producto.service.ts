import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteEliminarProductoService {

  constructor(private http:HttpClient) {  }
  API_URI='http://34.121.67.41:5003/EliminarProductoCliente';

  eliminar_producto(id:string){

    return this.http.post(`${this.API_URI}`,{id:id});
    
  }
}
