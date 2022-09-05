import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.scss']
})
export class ElementoComponent implements OnInit {

   //Variables 
   //Variables 
   selected = 'option0';
   constructor( 
    //private comunaService:ComunaService, 
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ElementoComponent>, 
    @Inject(MAT_DIALOG_DATA) public datosEntrada: any
    ) {
     
   }

   ngOnInit(): void {
   
  }

   //estructura para usar formulario reactivo
   formulario = new FormGroup({
    nombre: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
    //tipo: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
    cantidad: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
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