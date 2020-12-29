import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.css']
})
export class NavBarAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cerrar_sesion(){
    localStorage.setItem("credenciales","");
    this.router.navigate(['/welcome']);

  }

}
