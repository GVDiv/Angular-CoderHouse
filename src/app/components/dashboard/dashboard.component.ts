import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../model/alumnos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fecha: Date = new Date();

  inicio: string = "cursando";
  fin: string = "finalizado";

  listaAlumnos: Array<Alumnos> = [
    {nombre: 'Gabriel', curso: 'Angular', contacto:'gabriel@email.com'},
    {nombre: 'Micaela', curso: 'DesarrolloWeb', contacto:'micaela@email.com'},
    {nombre: 'Guillermo', curso: 'JavaScript', contacto:'guillermo@email.com'},
    {nombre: 'Marcelo', curso: 'JavaScript', contacto:'marcelo@email.com'},
    {nombre: 'Juan', curso: 'DesarrolloWeb', contacto:'juan@email.com'},
    {nombre: 'Viviana', curso: 'Angular', contacto:'vivi@email.com'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
