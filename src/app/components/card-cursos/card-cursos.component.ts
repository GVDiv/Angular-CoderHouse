import { Component, OnInit } from '@angular/core';
import { Curso } from '../interface/curso';

@Component({
  selector: 'app-card-cursos',
  templateUrl: './card-cursos.component.html',
  styleUrls: ['./card-cursos.component.css']
})
export class CardCursosComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
