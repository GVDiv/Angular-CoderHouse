import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { AbmCursosComponent } from './components/abm-cursos/abm-cursos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './components/material/material.component';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component'
import { CrearDialogComponent } from './components/abm-alumnos/crear-alumno/crear-dialog/crear-dialog.component';
import { MaterialModule } from './material/material/material.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    FooterComponent,
    MenuComponent,
    DashboardComponent,
    FormularioComponent,
    TablaComponent,
    AbmCursosComponent,
    MaterialComponent,
    AbmAlumnosComponent,
    CrearDialogComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
