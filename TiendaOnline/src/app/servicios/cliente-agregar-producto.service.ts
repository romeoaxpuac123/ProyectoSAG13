import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteAgregarProductoService {

  constructor(private http:HttpClient) {  }
  API_URI='http://34.121.67.41:5003/RegistrarProductoCliente';

  agregar_producto(nombre:string,Precio_venta:string,stock:string,categoria:string,imagen:string,id_cliente:string,precio_subaste:string,estado:string){

    return this.http.post(`${this.API_URI}`,{nombre:nombre,Precio_venta:Precio_venta,stock:stock,categoria:categoria,imagen:imagen,id_cliente:id_cliente,precio_subaste:precio_subaste,estado:estado});
    
  }
}
