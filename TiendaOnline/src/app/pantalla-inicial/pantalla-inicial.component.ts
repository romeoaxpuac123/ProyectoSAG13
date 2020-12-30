import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-pantalla-inicial',
  templateUrl: './pantalla-inicial.component.html',
  styleUrls: ['./pantalla-inicial.component.css']
})
export class PantallaInicialComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    
  }

  gotologinproviders(){
    this.router.navigate(['/login']);

  }

  gotologinclients(){
    this.router.navigate(['/loginclient']);

  }

  gotologinadmin(){
    this.router.navigate(['/loginadmin']);

  }

  gotologiclientxt(){
    this.router.navigate(['/u-login-cliente']);

  }

  gotologiproviderxt(){
    this.router.navigate(['/u-login-proveedor']);

  }

}
