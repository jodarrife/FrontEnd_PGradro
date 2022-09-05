import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EspacioComponent } from '../espacio/espacio.component';

@Component({
  selector: 'app-espacio-list',
  templateUrl: './espacio-list.component.html',
  styleUrls: ['./espacio-list.component.scss']
})
export class EspacioListComponent implements OnInit {

 //Variable
 espacios: any[] = [
  { espacioId: 1, nombreEspacio: 'espacio '},
  { espacioId: 2, nombreEspacio: 'espacio '},
  { espacioId: 3, nombreEspacio: 'espacio '},
];

constructor(
  public dialog: MatDialog,
  private route: ActivatedRoute,
  private router: Router
) {}

async ngOnInit() {
  await this.consultarEspacios();
}

//CONSULTAR SERVICE
async consultarEspacios() {
  //Son servicio
  //this.departamentos = await this.comunaService.getComunasOnce()
  //Variable
}

//MODAL CREAR SERVICE
modalFormulario() {
  const dialogRef = this.dialog.open(EspacioComponent, {
    width: '30%',
    data: { titulo: 'Registrar', espacio: null },
  });
  dialogRef.afterClosed().subscribe((espacio) => {
    console.log('datos ', espacio);
    if (espacio) {
      // registrar datos en firebase
      //this.comunaService.createComuna(comuna)
      //.then(() => {
      console.log('espacio registrado exitosamente');
      console.log(espacio);
      //this.consultarComunasOnce();
      //})
      // .catch((error) => {
      //console.log("error al registrar comuna ", error);
      //})
      // this.registrarComuna(comuna)
      this.espacios.push({
        espacioId: 10,
        nombreEspacio: espacio.nombre,
      });
    } else {
      console.log('espacio no registrado');
    }
  });
}
}
