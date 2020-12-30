import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ULoginProveedorService} from "../servicios/u-login-proveedor.service";
@Component({
  selector: 'app-u-login-proveedor',
  templateUrl: './u-login-proveedor.component.html',
  styleUrls: ['./u-login-proveedor.component.css']
})
export class ULoginProveedorComponent implements OnInit {

  
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

  constructor(private router: Router,private servlogin:ULoginProveedorService) { }

  ngOnInit() {
    this.apis=["http://busg1.us-e2.cloudhub.io/login-proveedor","","http://35.206.98.190/login-proveedor","http://esb4.djgg.ml:3030/login-proveedor","http://34.123.238.63:8280/services/integrador/login-proveedor","http://35.184.63.236:3004/login-proveedor","http://68.183.102.104:3000/login-proveedor","http://35.232.242.252:9999/login-proveedor","http://sa-g9.us-e2.cloudhub.io/login-proveedor","ttp://34.73.157.172:5005/login-proveedor","http://soagrupo11.us-e2.cloudhub.io/login-proveedor"];
  }

  recibirDatos() {
    
    this.nombreRecibido = this.user;
    this.passRecibida = this.pass;
    this.servlogin.GuardarUsuario(this.apis[this.grupo-1],this.user,this.pass).subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo.msg);
               if(this.listainfo.status=="success"){
                
                localStorage.setItem("id",this.listainfo.data.id);  
                this.router.navigate(['/u-crear-producto-proveedor']);
                //alert("usuario valido");

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
