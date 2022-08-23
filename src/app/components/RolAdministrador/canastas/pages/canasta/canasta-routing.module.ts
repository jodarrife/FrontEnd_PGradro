import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanastaComponent } from './canasta.component';

const routes: Routes = [{ path: '', component: CanastaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanastaRoutingModule { }
