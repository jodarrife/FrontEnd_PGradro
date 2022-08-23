import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentoListComponent } from './instrumento-list.component';

const routes: Routes = [{ path: '', component: InstrumentoListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentoListRoutingModule { }
