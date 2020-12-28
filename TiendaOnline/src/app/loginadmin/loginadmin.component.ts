import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  user:string="";
  pass:string="";

  placeholders = {
    'username': 'Nombre de usuario',
    'userpass': 'Contraseña'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  entrar(){
    if(this.user=="admin@econoahorro.com"){
      if(this.pass=="1234"){
        this.router.navigate(['/pantalla-admin']);
      }else{
        alert("Contraseña incorrecta")
      }
    }else{
      alert("No hay un usuario asociado al correo");
    }
  }

}
