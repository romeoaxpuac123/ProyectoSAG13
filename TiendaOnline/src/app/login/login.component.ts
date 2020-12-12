import { Component, OnInit } from '@angular/core';
import {LoginService} from "../servicios/login.service";
import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string="";
  pass:string="";
  listainfo:any=[];

  nombreRecibido = '';
  passRecibida = '';

  placeholders = {
    'username': 'Nombre de usuario',
    'userpass': 'Contraseña'
  };

  constructor(private router: Router,private servlogin:LoginService) { }

  ngOnInit() {
  }

  recibirDatos() {
    
    this.nombreRecibido = this.user;
    this.passRecibida = this.pass;
    this.servlogin.GuardarUsuario(this.user,this.pass).subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo.msg);
               if(this.listainfo.msg==true){
                localStorage.setItem("credenciales",JSON.stringify(result));  
                this.router.navigate(['/proveedor']);
                //alert("usuario valido");

               }else{
                alert("usuario no valido");

               }
      },
      error=>{console.log(error)
      });
      
  
    
  }

 
}


