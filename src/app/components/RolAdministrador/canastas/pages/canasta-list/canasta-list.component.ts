import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CanastaComponent } from '../canasta/canasta.component';

@Component({
  selector: 'app-canasta-list',
  templateUrl: './canasta-list.component.html',
  styleUrls: ['./canasta-list.component.scss'],
})
export class CanastaListComponent implements OnInit {
  //Variable
  canastas: any[] = [
    { canastaId: 1, nombreCanasta: 'Canasta 1', cantidadInstrumentos: 3, nombreIntrumentos: ['Bisturi', 'gasa']},
    { canastaId: 2, nombreCanasta: 'Canasta 2', cantidadInstrumentos: 5, nombreIntrumentos: ['Bisturi', 'gasa']},
    { canastaId: 3, nombreCanasta: 'Canasta 3', cantidadInstrumentos: 8, nombreIntrumentos: ['Bisturi', 'gasa', 'guantes']},
  ];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.consultarCanastas();
  }

  //CONSULTAR SERVICE
  async consultarCanastas() {
    //Son servicio
    //this.departamentos = await this.comunaService.getComunasOnce()
    //Variable
  }

  //MODAL CREAR SERVICE
  modalFormulario() {
    const dialogRef = this.dialog.open(CanastaComponent, {
      width: '30%',
      data: { titulo: 'Registrar', canasta: null },
    });
    dialogRef.afterClosed().subscribe((canasta) => {
      console.log('datos ', canasta);
      if (canasta) {
        // registrar datos en firebase
        //this.comunaService.createComuna(comuna)
        //.then(() => {
        console.log('Canasta registrada exitosamente');
        console.log(canasta);
        //this.consultarComunasOnce();
        //})
        // .catch((error) => {
        //console.log("error al registrar comuna ", error);
        //})
        // this.registrarComuna(comuna)
        this.canastas.push({
          canastaId: 10,
          nombreCanasta: canasta.nombre,
          cantidadInstrumentos: canasta.cantidad,
          nombreIntrumentos: canasta.nombreIns,
        });
      } else {
        console.log('Canasta no registrada');
      }
    });
  }
}

