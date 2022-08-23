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
  { path: 'AdminInstrumentos', loadChildren: () => import('./components/RolAdministrador/instrumentos/instrumentos.module' ).then(m => m.InstrumentosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
