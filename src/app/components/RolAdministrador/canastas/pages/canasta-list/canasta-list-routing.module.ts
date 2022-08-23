import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanastaListComponent } from './canasta-list.component';

const routes: Routes = [{ path: '', component: CanastaListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanastaListRoutingModule { }
