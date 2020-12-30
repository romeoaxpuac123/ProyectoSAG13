import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UVerProductosService {

  constructor(private http:HttpClient) {  }
  
  get_productos(api:string){
    return this.http.get(`${api}`);
  }

  comprar_productos(api:string,texto:string){
    return this.http.post(`${api}`,JSON.parse(texto));
  }

}
