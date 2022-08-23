import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteDetalleComponent } from './docente-detalle.component';

const routes: Routes = [{ path: '', component: DocenteDetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteDetalleRoutingModule { }
