import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-dialog',
  templateUrl: './crear-dialog.component.html',
  styleUrls: ['./crear-dialog.component.css']
})
export class CrearDialogComponent implements OnInit {
  form: FormGroup = this.fb.group(
    {
      nombre:[null, Validators.required],
      apellido:[null, Validators.required],
      edad:[null, Validators.required],
      curso:[null, Validators.required],
      email:[null, Validators.required],
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
  
 
}

