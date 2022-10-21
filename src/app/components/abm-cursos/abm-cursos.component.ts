import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abm-cursos',
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.css']
})
export class AbmCursosComponent implements OnInit {

  usuarios: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarUsuario($event: any): void{
    this.usuarios.push($event);
  }

}
