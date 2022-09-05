import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementoComponent } from '../elemento/elemento.component';

@Component({
  selector: 'app-elemento-list',
  templateUrl: './elemento-list.component.html',
  styleUrls: ['./elemento-list.component.scss']
})
export class ElementoListComponent implements OnInit {

  //Variable
  elementos: any[] = [
    { elementoId: 1, nombreElemento: 'elemento 1',tipoElemento: 'tipo 1', cantidad: 3 },
    { elementoId: 2, nombreElemento: 'elemento 2',tipoElemento: 'tipo 2', cantidad: 5 },
    { elementoId: 3, nombreElemento: 'elemento 3',tipoElemento: 'tipo 3', cantidad: 8 },
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
    const dialogRef = this.dialog.open(ElementoComponent, {
      width: '30%',
      data: { titulo: 'Registrar', elemento: null },
    });
    dialogRef.afterClosed().subscribe((elemento) => {
      console.log('datos ', elemento);
      if (elemento) {
        // registrar datos en firebase
        //this.comunaService.createComuna(comuna)
        //.then(() => {
        console.log('elemento registrada exitosamente');
        console.log(elemento);
        //this.consultarComunasOnce();
        //})
        // .catch((error) => {
        //console.log("error al registrar comuna ", error);
        //})
        // this.registrarComuna(comuna)
        this.elementos.push({
          elementoId: 10,
          nombreElemento: elemento.nombre,
          tipoElemento: elemento.nombre,
          cantidad: elemento.cantidad,
        });
      } else {
        console.log('instrumento no registrada');
      }
    });
  }
}

