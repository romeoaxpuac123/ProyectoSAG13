import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosCategoriaService {

  constructor(private http:HttpClient) {  }
  API_URI='http://34.121.67.41:6003/ProductosCategoriasP';

  get_productos(categoria:string){

    return this.http.post(`${this.API_URI}`,{categoria:categoria});
    
  }

}
