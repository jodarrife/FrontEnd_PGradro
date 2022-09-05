import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspacioDetalleComponent } from './espacio-detalle.component';

const routes: Routes = [{ path: '', component: EspacioDetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspacioDetalleRoutingModule { }
