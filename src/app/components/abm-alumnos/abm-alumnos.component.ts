import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from '../interface/alumno';
import { listaAlumnos } from './alumnos';
import { CrearDialogComponent } from './crear-alumno/crear-dialog/crear-dialog.component';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css']
})
export class AbmAlumnosComponent implements OnInit {

  dataInicial = listaAlumnos
  
  ELEMENT_DATA = new MatTableDataSource<Alumno>([])
  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'curso', 'email', 'accion', ];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.ELEMENT_DATA.data = this.dataInicial
  }

  borrar(id:number){
    let position = this.dataInicial.findIndex(alumno => alumno.id == id)
    this.dataInicial.splice(position,1)
    this.ELEMENT_DATA.data = this.dataInicial
  }

  openDialog(): void {
    let dialog = this.dialog.open(CrearDialogComponent, {
      width: '50%',
      height: '50%',
    });

    dialog.beforeClosed().subscribe(res => {
      console.log(res);
      this.dataInicial.push(
        {
          ...res,
          id:this.dataInicial.length+1
        },
      )
    })
    console.log(this.dataInicial)
    this.ELEMENT_DATA.data = this.dataInicial
  }
}
