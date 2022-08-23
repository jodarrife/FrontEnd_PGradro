import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrumentosRoutingModule } from './instrumentos-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InstrumentosRoutingModule,
    MaterialModule
  ]
})
export class InstrumentosModule { }
