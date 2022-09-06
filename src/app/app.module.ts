import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { MenuPrincipalComponent } from './shared/components/menu-principal/menu-principal.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CanastasComponent } from './components/RolAdministrador/canastas/canastas.component';
import { DocentesComponent } from './components/RolAdministrador/docentes/docentes.component';
import { EspacioFisicosComponent } from './components/RolAdministrador/espacio-fisicos/espacio-fisicos.component';
import { ElementoLaboratorioComponent } from './components/RolAdministrador/elemento-laboratorio/elemento-laboratorio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    HomeComponent,
    LoginComponent,
    CanastasComponent,
    DocentesComponent,
    EspacioFisicosComponent,
    ElementoLaboratorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }