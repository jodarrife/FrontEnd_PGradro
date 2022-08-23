import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'Instrumento', loadChildren: () => import('./pages/instrumento/instrumento.module').then(m => m.InstrumentoModule) },
  { path: '', loadChildren: () => import('./pages/instrumento-list/instrumento-list.module').then(m => m.InstrumentoListModule) },
  { path: 'Detalle-Instrumento', loadChildren: () => import('./pages/instrumento-detalle/instrumento-detalle.module').then(m => m.InstrumentoDetalleModule) },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentosRoutingModule { }
