import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementoDetalleComponent } from './elemento-detalle.component';

const routes: Routes = [{ path: '', component: ElementoDetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementoDetalleRoutingModule { }
