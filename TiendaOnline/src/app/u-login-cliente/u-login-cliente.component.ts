import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ULoginClienteService} from "../servicios/u-login-cliente.service";
@Component({
  selector: 'app-u-login-cliente',
  templateUrl: './u-login-cliente.component.html',
  styleUrls: ['./u-login-cliente.component.css']
})
export class ULoginClienteComponent implements OnInit {

  grupo:number=0;
  user:string="";
  pass:string="";
  listainfo:any=[];
  apis:any=[];
  nombreRecibido = '';
  passRecibida = '';

  placeholders = {
    'username': 'Nombre de usuario',
    'userpass': 'Contraseña'
  };
  constructor(private router: Router,private servlogin:ULoginClienteService) { }

  ngOnInit(): void {
    this.apis=["http://busg1.us-e2.cloudhub.io/login-cliente","","http://35.206.98.190/login-cliente","http://esb4.djgg.ml:3030/login-cliente","http://34.123.238.63:8280/services/integrador/login-cliente","http://35.184.63.236:3004/login-cliente","http://68.183.102.104:3000/login-cliente","http://35.232.242.252:9999/login-cliente","http://sa-g9.us-e2.cloudhub.io/login-cliente","http://34.73.157.172:5005/login-cliente","http://soagrupo11.us-e2.cloudhub.io/login-cliente"];
  }

  hacerPostLoginCliente() {
    this.nombreRecibido = this.user;
    this.passRecibida = this.pass;
    this.servlogin.EnviarCredenciales(this.apis[this.grupo-1],this.user,this.pass).subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo.msg);
               if(this.listainfo.status=="success"){
                localStorage.setItem("id",this.listainfo.data.id);  
                //localStorage.setItem("credenciales",JSON.stringify(result));
                this.router.navigate(['/u-crear-producto-cliente']);
               }else{
                alert("usuario no valido");

               }
      },
      error=>{console.log(error)
      });
  }

  seleccionar_grupo(grupo:string){
      this.grupo=Number(grupo);
      localStorage.setItem("grupo",(grupo));
  }

}
