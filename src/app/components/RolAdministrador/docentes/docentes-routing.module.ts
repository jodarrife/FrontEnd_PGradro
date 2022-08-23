import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Docente', loadChildren: () => import('./pages/docente/docente.module').then(m => m.DocenteModule) },
  { path: '', loadChildren: () => import('./pages/docente-list/docente-list.module').then(m => m.DocenteListModule) },
  { path: 'Detalle-Docente', loadChildren: () => import('./pages/docente-detalle/docente-detalle.module').then(m => m.DocenteDetalleModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocentesRoutingModule { }
