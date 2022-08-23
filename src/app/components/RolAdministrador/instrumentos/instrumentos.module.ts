import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrumentosRoutingModule } from './instrumentos-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { InstrumentoComponent } from './pages/instrumento/instrumento.component';
import { InstrumentoListComponent } from './pages/instrumento-list/instrumento-list.component';
import { InstrumentoDetalleComponent } from './pages/instrumento-detalle/instrumento-detalle.component';


@NgModule({
  declarations: [
    InstrumentoComponent,
    InstrumentoListComponent,
    InstrumentoDetalleComponent
  ],
  imports: [
    CommonModule,
    InstrumentosRoutingModule,
    MaterialModule
  ]
})
export class InstrumentosModule { }
