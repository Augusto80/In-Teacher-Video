import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { QuienesomosComponent } from './componentes/quienesomos/quienesomos.component';
import { IniciasesionComponent } from './componentes/iniciasesion/iniciasesion.component';
import { RegistrateComponent } from './componentes/registrate/registrate.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

import { AdminComponent } from './componentes/admin/admin.component';
import { AddPeliculasComponent } from './componentes/add-peliculas/add-peliculas.component';
import { NavbaradminComponent } from './componentes/navbaradmin/navbaradmin.component'; 
import { ReservasComponent } from './componentes/reservas/reservas.component'; 

import {HttpClientModule} from '@angular/common/http';
import {ClientesService} from './services/clientes.service';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuienesomosComponent,
    IniciasesionComponent,
    RegistrateComponent,
    FooterComponent,
    InicioComponent,
    AdminComponent,
    AddPeliculasComponent,
    NavbaradminComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
