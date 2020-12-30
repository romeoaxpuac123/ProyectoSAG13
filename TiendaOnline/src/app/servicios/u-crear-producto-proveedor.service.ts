import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UCrearProductoProveedorService {
  constructor(private http:HttpClient) {  }


  agregar_producto(api:string,id:string,nombre:string,descripcion:string,stock:string,precio_venta:string,foto:string){

    return this.http.post(`${api}`,{id_proveedor:id,nombre:nombre,descripcion:descripcion,stock:stock,precio_venta:precio_venta,foto:foto});
    
  }
}
