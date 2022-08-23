import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarCuentaComponent } from './recuperar-cuenta.component';

const routes: Routes = [{ path: '', component: RecuperarCuentaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecuperarCuentaRoutingModule { }
