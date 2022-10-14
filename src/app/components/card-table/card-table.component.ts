import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from '../interface/curso';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {
  cursos: Curso[] = [
    {
      nombre: 'Angular',
      comision: '32223',
      profesor: 'Abner',
      fechaInicio: new Date(2022, 0, 1),
      fechaFin: new Date(2022, 1, 28),
      inscripcionAbierta: true,
      imagen: 'src/assets/img/coder.jpg',
    },
    {
      nombre: 'Angular',
      comision: '34223',
      profesor: 'Adrian',
      fechaInicio: new Date(2022, 2, 1),
      fechaFin: new Date(2022, 3, 28),
      inscripcionAbierta: true,
      imagen: 'src/assets/img/coder.jpg',
    },
    {
      nombre: 'ReactJS',
      comision: '36223',
      profesor: 'Abner',
      fechaInicio: new Date(2022, 1, 1),
      fechaFin: new Date(2022, 3, 28),
      inscripcionAbierta: false,
      imagen: 'src/assets/img/coder.jpg',
    },
    {
      nombre: 'VueJS',
      comision: '40223',
      profesor: 'Abner',
      fechaInicio: new Date(2022, 4, 1),
      fechaFin: new Date(2022, 5, 28),
      inscripcionAbierta: false,
      imagen: 'src/assets/img/coder.jpg',
    }
   
  ];

  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  constructor() { }

  ngOnInit(): void {
  }

  filtrarCurso(event: Event){
    const valorObtenido = (event?.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(curso: Curso, filtro: string){
      return curso.nombre.toLowerCase().includes(filtro.toLocaleLowerCase());
    }
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

  filtrarComision(event: Event){
    const valorObtenido = (event?.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(curso: Curso, filtro: string){
      return curso.comision.toLowerCase().includes(filtro.toLocaleLowerCase());
    }
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

}
