import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar-proveedor',
  templateUrl: './nav-bar-proveedor.component.html',
  styleUrls: ['./nav-bar-proveedor.component.css']
})
export class NavBarProveedorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cerrar_sesion(){
    localStorage.setItem("credenciales","");
    this.router.navigate(['/welcome']);

  }

}
