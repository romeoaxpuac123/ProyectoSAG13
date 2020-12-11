import { Component, OnInit } from '@angular/core';
import {LoginClienteService} from "../servicios/login-cliente.service";
import { SesionesService } from '../servicios/sesiones.service';
@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {

  user:string="";
  pass:string="";
  listainfo:any=[];

  nombreRecibido = '';
  passRecibida = '';

  placeholders = {
    'username': 'Nombre de usuario',
    'userpass': 'Contraseña'
  };
  constructor(private servlogin:LoginClienteService, private sesiones:SesionesService) { }

  ngOnInit(): void {
  }

  hacerPostLoginCliente() {
   this.sesiones.guardar_sesion("prueba","sesion","login");
    this.nombreRecibido = this.user;
    this.passRecibida = this.pass;
    this.servlogin.EnviarCredenciales(this.user,this.pass).subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo.msg);
               if(this.listainfo.msg==true){
                  alert("usuario valido");

               }else{
                alert("usuario no valido");

               }
      },
      error=>{console.log(error)
      });
  }
}
