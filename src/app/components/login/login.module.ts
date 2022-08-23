import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RecuperarCuentaComponent } from './pages/recuperar-cuenta/recuperar-cuenta.component';
import { CompletarPerfilComponent } from './pages/completar-perfil/completar-perfil.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    InicioSesionComponent,
    CompletarPerfilComponent,
    RecuperarCuentaComponent,
    RegistrarseComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
