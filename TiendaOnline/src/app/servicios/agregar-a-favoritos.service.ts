import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgregarAFavoritosService {

  constructor(private http:HttpClient) {  }
  API_URI='http://34.121.67.41:6003/RegistrarFavorito';

  agregar_favoritos(id_cliente:string,Nombre:string,precio_venta:string,id_Producto:string){

    return this.http.post(`${this.API_URI}`,{Nombre:Nombre,precio_venta:precio_venta,id_Producto:id_Producto,id_cliente:id_cliente});
    
  }
}
