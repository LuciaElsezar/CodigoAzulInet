import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { TablaPacientesComponent } from './tabla-pacientes/tabla-pacientes.component';
import { TablaLlamadosComponent } from './tabla-llamados/tabla-llamados.component';
import { DatosPacienteComponent } from './datos-paciente/datos-paciente.component';
import { TablaAreasComponent } from './tabla-areas/tabla-areas.component';
import { GraficoLlamadosComponent } from './grafico-llamados/grafico-llamados.component';


const routes:Routes = [
  {path:'log-in', component:LogInComponent},
  {path:'', component:InicioComponent},
  {path:'dashboard-admin', component:DashboardAdminComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    DashboardAdminComponent,
    TablaPacientesComponent,
    TablaLlamadosComponent,
    DatosPacienteComponent,
    TablaAreasComponent,
    GraficoLlamadosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
