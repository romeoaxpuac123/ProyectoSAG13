import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {
  listainfo:any=[];
  
  name:string="";
  apellido:string="";
  email:string="";
  celular:string="";
  

  constructor(private router: Router) { }

  ngOnInit(): void {

    let a = localStorage.getItem("credenciales");
    if(a!=null)
      this.listainfo=JSON.parse(a);
      this.name=this.listainfo.name;
      this.apellido=this.listainfo.apellido;
      this.email=this.listainfo.email;
      this.celular=this.listainfo.celular;
  }


}
