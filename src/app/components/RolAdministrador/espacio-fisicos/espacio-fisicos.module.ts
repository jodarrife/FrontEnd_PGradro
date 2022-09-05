import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspacioFisicosRoutingModule } from './espacio-fisicos-routing.module';
import { EspacioComponent } from './pages/espacio/espacio.component';
import { EspacioDetalleComponent } from './pages/espacio-detalle/espacio-detalle.component';
import { EspacioListComponent } from './pages/espacio-list/espacio-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    EspacioComponent,
    EspacioDetalleComponent,
    EspacioListComponent
  ],
  imports: [
    CommonModule,
    EspacioFisicosRoutingModule,
    MaterialModule
  ]
})
export class EspacioFisicosModule { }
