import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-proveedor',
  templateUrl: './perfil-proveedor.component.html',
  styleUrls: ['./perfil-proveedor.component.css']
})
export class PerfilProveedorComponent implements OnInit {
  listainfo:any=[];
  
  name:string="";
  email:string="";
  direccion:string="";

  constructor() { }

  ngOnInit(): void {
    let a = localStorage.getItem("credenciales");
    if(a!=null)
      this.listainfo=JSON.parse(a);
      this.name=this.listainfo.name;
      this.email=this.listainfo.email;
      this.direccion=this.listainfo.direccion;
  }

}
