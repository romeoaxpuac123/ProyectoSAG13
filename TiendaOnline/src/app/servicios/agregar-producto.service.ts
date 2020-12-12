import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AgregarProductoService {

  constructor(private http:HttpClient) {  }
  API_URI='http://35.193.123.113:4003/RegistrarProducto';

  agregar_producto(nombre:string,Precio_venta:string,stock:string,categoria:string,imagen:string,id_proveedor:string){

    return this.http.post(`${this.API_URI}`,{nombre:nombre,Precio_venta:Precio_venta,stock:stock,categoria:categoria,imagen:imagen,id_proveedor:id_proveedor});
    
  }

}
