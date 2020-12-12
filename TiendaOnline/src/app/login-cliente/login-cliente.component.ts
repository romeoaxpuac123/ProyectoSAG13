import { Component, OnInit } from '@angular/core';
import {LoginClienteService} from "../servicios/login-cliente.service";
import { CanActivate, Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
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
  constructor(private router: Router,private servlogin:LoginClienteService) { }

  ngOnInit(): void {
  }

  hacerPostLoginCliente() {
    this.nombreRecibido = this.user;
    this.passRecibida = this.pass;
    this.servlogin.EnviarCredenciales(this.user,this.pass).subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo.msg);
               if(this.listainfo.msg==true){
                localStorage.setItem("credenciales",JSON.stringify(result));
                this.router.navigate(['/cliente']);
               }else{
                alert("usuario no valido");

               }
      },
      error=>{console.log(error)
      });
  }
}
