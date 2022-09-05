import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementoLaboratorioRoutingModule } from './elemento-laboratorio-routing.module';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { ElementoComponent } from './pages/elemento/elemento.component';
import { ElementoListComponent } from './pages/elemento-list/elemento-list.component';
import { ElementoDetalleComponent } from './pages/elemento-detalle/elemento-detalle.component';


@NgModule({
  declarations: [
    ElementoComponent,
    ElementoListComponent,
   ElementoDetalleComponent 
  ],
  imports: [
    CommonModule,
    ElementoLaboratorioRoutingModule,
  MaterialModule
  ]
})
export class ElementoLaboratorioModule { }
