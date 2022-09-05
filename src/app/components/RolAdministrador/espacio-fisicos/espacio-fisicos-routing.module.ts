import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Espacio', loadChildren: () => import('./pages/espacio/espacio.module').then(m => m.EspacioModule) },
  { path: '', loadChildren: () => import('./pages/espacio-list/espacio-list.module').then(m => m.EspacioListModule) },
  { path: 'Detalle-Espacio', loadChildren: () => import('./pages/espacio-detalle/espacio-detalle.module').then(m => m.EspacioDetalleModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspacioFisicosRoutingModule { }
