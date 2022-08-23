import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentoComponent } from './instrumento.component';

const routes: Routes = [{ path: '', component: InstrumentoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentoRoutingModule { }
