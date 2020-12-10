import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PantallaInicialComponent } from './pantalla-inicial/pantalla-inicial.component';

const routes: Routes = [ 
  {path:'',redirectTo:'/welcome',pathMatch:'full'},
  { path: 'welcome', component: PantallaInicialComponent },
  { path: 'login', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
