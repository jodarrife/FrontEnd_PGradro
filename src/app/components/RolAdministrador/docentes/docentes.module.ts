import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocentesRoutingModule } from './docentes-routing.module';
import { DocenteComponent } from './pages/docente/docente.component';
import { DocenteDetalleComponent } from './pages/docente-detalle/docente-detalle.component';
import { DocenteListComponent } from './pages/docente-list/docente-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    DocenteComponent,
    DocenteDetalleComponent,
    DocenteListComponent
  ],
  imports: [
    CommonModule,
    DocentesRoutingModule,
    MaterialModule
  ]
})
export class DocentesModule { }
