import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'Elemento', loadChildren: () => import('./pages/elemento/elemento.module').then(m => m.ElementoModule) },
  { path: '', loadChildren: () => import('./pages/elemento-list/elemento-list.module').then(m => m.ElementoListModule) },
  { path: 'Detalle-Elemento', loadChildren: () => import('./pages/elemento-detalle/elemto-detalle.module').then(m => m.ElementoDetalleModule) },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementoLaboratorioRoutingModule { }
