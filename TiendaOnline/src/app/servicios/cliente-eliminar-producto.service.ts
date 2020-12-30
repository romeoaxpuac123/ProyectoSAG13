import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteEliminarProductoService {

  constructor(private http:HttpClient) {  }
  API_URI='http://www.sa-proyecto.tk/api/EliminarProductoCliente';

  eliminar_producto(id:string){

    return this.http.post(`${this.API_URI}`,{id:id});
    
  }
}
