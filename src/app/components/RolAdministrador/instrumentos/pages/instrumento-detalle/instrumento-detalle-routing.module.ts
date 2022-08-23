import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentoDetalleComponent } from './instrumento-detalle.component';

const routes: Routes = [{ path: '', component: InstrumentoDetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentoDetalleRoutingModule { }
