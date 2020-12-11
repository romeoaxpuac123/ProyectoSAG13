import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { LoginComponent } from './login/login.component';
import { PantallaInicialComponent } from './pantalla-inicial/pantalla-inicial.component';
import { RegistroProveedorComponent } from './registro-proveedor/registro-proveedor.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { PantallaClienteComponent } from './pantalla-cliente/pantalla-cliente.component';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
const routes: Routes = [ 
  {path:'',redirectTo:'/welcome',pathMatch:'full'},
  { path: 'welcome', component: PantallaInicialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginclient', component: LoginClienteComponent },
  { path: 'registerprov', component: RegistroProveedorComponent },
  { path: 'registercli', component: RegistroClienteComponent },
  { path: 'cliente', component: PantallaClienteComponent },
  { path: 'perfil-cliente', component: PerfilClienteComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
