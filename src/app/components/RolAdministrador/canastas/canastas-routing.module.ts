import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Canasta', loadChildren: () => import('./pages/canasta/canasta.module').then(m => m.CanastaModule) },
  { path: '', loadChildren: () => import('./pages/canasta-list/canasta-list.module').then(m => m.CanastaListModule) },
  { path: 'Detalle-Canasta', loadChildren: () => import('./pages/canasta-detalle/canasta-detalle.module').then(m => m.CanastaDetalleModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanastasRoutingModule { }
