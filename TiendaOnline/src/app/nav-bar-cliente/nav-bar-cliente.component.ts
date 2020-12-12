import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar-cliente',
  templateUrl: './nav-bar-cliente.component.html',
  styleUrls: ['./nav-bar-cliente.component.css']
})
export class NavBarClienteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cerrar_sesion(){
    localStorage.setItem("credenciales","");
    this.router.navigate(['/welcome']);

  }
}
