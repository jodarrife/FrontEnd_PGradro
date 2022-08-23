import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { InstrumentoComponent } from '../instrumento/instrumento.component';

@Component({
  selector: 'app-instrumento-list',
  templateUrl: './instrumento-list.component.html',
  styleUrls: ['./instrumento-list.component.scss'],
})
export class InstrumentoListComponent implements OnInit {
  //Variable
  instrumentos: any[] = [
    { instrumentosId: 1, nombreInstrumento: 'instrumento 1', cantidad: 3 },
    { instrumentosId: 2, nombreInstrumento: 'instrumento 2', cantidad: 5 },
    { instrumentosId: 3, nombreInstrumento: 'instrumento 3', cantidad: 8 },
  ];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.consultarInstrumentos();
  }

  //CONSULTAR SERVICE
  async consultarInstrumentos() {
    //Son servicio
    //this.departamentos = await this.comunaService.getComunasOnce()
    //Variable
  }

  //MODAL CREAR SERVICE
  modalFormulario() {
    const dialogRef = this.dialog.open(InstrumentoComponent, {
      width: '30%',
      data: { titulo: 'Registrar', instrumento: null },
    });
    dialogRef.afterClosed().subscribe((instrumento) => {
      console.log('datos ', instrumento);
      if (instrumento) {
        // registrar datos en firebase
        //this.comunaService.createComuna(comuna)
        //.then(() => {
        console.log('instrumento registrada exitosamente');
        console.log(instrumento);
        //this.consultarComunasOnce();
        //})
        // .catch((error) => {
        //console.log("error al registrar comuna ", error);
        //})
        // this.registrarComuna(comuna)
        this.instrumentos.push({
          instrumentosId: 10,
          nombreInstrumento: instrumento.nombre,
          cantidad: instrumento.cantidad,
        });
      } else {
        console.log('instrumento no registrada');
      }
    });
  }
}
