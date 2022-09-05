import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-espacio',
  templateUrl: './espacio.component.html',
  styleUrls: ['./espacio.component.scss']
})
export class EspacioComponent implements OnInit {

   //Variables 
  
   constructor( 
    //private comunaService:ComunaService, 
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EspacioComponent>, 
    @Inject(MAT_DIALOG_DATA) public datosEntrada: any
    ) {
     
   }

   ngOnInit(): void {
   
  }

   //estructura para usar formulario reactivo
   formulario = new FormGroup({
    nombre: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
  });
  
  //al cancelar el modal
  cancelar() {
    this.dialogRef.close(null)
  }

  //al confirmar el registro
  guardar(): void {
   
    /*const departamentoAux: Instrumento={
      departamentoId: 1,
      nombreDepartamento: this.formulario.value.nombre
    }*/
    if (this.formulario.invalid) {
      return;
    }
    this.dialogRef.close(this.formulario.value);
  }
}