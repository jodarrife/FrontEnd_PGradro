import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanastasRoutingModule } from './canastas-routing.module';
import { CanastaComponent } from './pages/canasta/canasta.component';
import { CanastaDetalleComponent } from './pages/canasta-detalle/canasta-detalle.component';
import { CanastaListComponent } from './pages/canasta-list/canasta-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    CanastaComponent,
    CanastaDetalleComponent,
    CanastaListComponent
  ],
  imports: [
    CommonModule,
    CanastasRoutingModule,
    MaterialModule
  ]
})
export class CanastasModule { }
