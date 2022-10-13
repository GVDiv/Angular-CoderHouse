import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AbmCursosComponent } from './components/abm-cursos/abm-cursos.component';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';



const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'cursos', component: AbmCursosComponent },
  { path: 'alumnos', component: AbmAlumnosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
