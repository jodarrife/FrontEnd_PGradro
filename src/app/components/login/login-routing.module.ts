import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent ,redirectTo: 'login'},
  { path: 'login', loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionModule) },
  { path: 'registro', loadChildren: () => import('./pages/registrarse/registrarse.module').then(m => m.RegistrarseModule) },
  { path: 'completarPerfil', loadChildren: () => import('./pages/completar-perfil/completar-perfil.module').then(m => m.CompletarPerfilModule) },
  { path: 'recuperarCuenta', loadChildren: () => import('./pages/recuperar-cuenta/recuperar-cuenta.module').then(m => m.RecuperarCuentaModule) },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
