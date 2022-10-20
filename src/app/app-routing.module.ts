import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AbmCursosComponent } from './components/cursos/abm-cursos/abm-cursos.component';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';



const routes: Routes = [
  { path: 'inicio', component: DashboardComponent },
  { path: 'alumnos', component: AbmAlumnosComponent },
  { path: 'cursos', component: AbmCursosComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
