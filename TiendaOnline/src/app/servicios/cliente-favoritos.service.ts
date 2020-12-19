import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteFavoritosService {

  constructor(private http:HttpClient) {  }
  API_URI='http://34.121.67.41:6003/MisFavoritos';
  API_URI2='http://34.121.67.41:6003/EliminarFavorito';

  get_productos(id:string){

    return this.http.post(`${this.API_URI}`,{id:id});
    
  }

  eliminar_fav(id_favorito:string){

    return this.http.post(`${this.API_URI2}`,{id_favorito:id_favorito});
    
  }
}
