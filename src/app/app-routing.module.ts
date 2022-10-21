import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AbmCursosComponent } from './components/abm-cursos/abm-cursos.component';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';
import { CardTableComponent } from './components/card-table/card-table.component';



const routes: Routes = [
  { path: 'inicio', component: DashboardComponent },
  { path: 'alumnos', component: AbmAlumnosComponent },
  { path: 'cursos', component: AbmCursosComponent },
  { path: 'fechas', component: CardTableComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
