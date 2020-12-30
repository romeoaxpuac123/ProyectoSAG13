import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoPedidoService {

    
  constructor(private http:HttpClient) {  }
  API_URI='http://34.121.67.41:9003/MiPedido';
  
  get_pedido(id:string,id_venta:string){

    return this.http.post(`${this.API_URI}`,{id:id,id_venta:id_venta});
    
  }
}
