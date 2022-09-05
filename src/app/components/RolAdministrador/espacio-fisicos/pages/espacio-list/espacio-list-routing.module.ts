import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspacioListComponent } from './espacio-list.component';

const routes: Routes = [{ path: '', component: EspacioListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspacioListRoutingModule { }
