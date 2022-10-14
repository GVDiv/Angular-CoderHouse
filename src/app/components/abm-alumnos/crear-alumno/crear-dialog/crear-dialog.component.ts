import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-dialog',
  templateUrl: './crear-dialog.component.html',
  styleUrls: ['./crear-dialog.component.css']
})
export class CrearDialogComponent implements OnInit {
  form: FormGroup = this.fb.group(
    {
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['',[Validators.required, Validators.min(21), this.validarEdad()]],
      username: ['',[Validators.required]],
      email: ['',[Validators.required]],
    }
  )

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CrearDialogComponent>
  ) {}

  ngOnInit(): void {
  }

  guardar(){
    this.dialogRef.close(this.form.value)
  }

  validarEdad(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null =>{
      return (!Number.isInteger(parseInt(control.value))) ? {errorEdad: true} : null;
    }
  }
  
 
}

