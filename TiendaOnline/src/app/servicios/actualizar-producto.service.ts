import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ActualizarProductoService {

  constructor(private http:HttpClient) {  }
  API_URI='http://www.sa-proyecto.tk/api/ActualizarProducto';

  actualizar_producto(id:string,nombre:string,Precio_venta:string,stock:string,categoria:string,imagen:string,id_proveedor:string,precio_subaste:string,estado:string){

    return this.http.post(`${this.API_URI}`,{id:id,nombre:nombre,Precio_venta:Precio_venta,stock:stock,categoria:categoria,imagen:imagen,id_proveedor:id_proveedor,precio_subaste:precio_subaste,estado:estado});
    
  }
}
