import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'authentication', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'authentication', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'AdminElementos', loadChildren: () => import('./components/RolAdministrador/elemento-laboratorio/elemento-laboratorio.module' ).then(m => m.ElementoLaboratorioModule) },
  { path: 'AdminCanastas', loadChildren: () => import('./components/RolAdministrador/canastas/canastas.module' ).then(m => m.CanastasModule) },
  { path: 'AdminEspacios', loadChildren: () => import('./components/RolAdministrador/espacio-fisicos/espacio-fisicos.module' ).then(m => m.EspacioFisicosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
