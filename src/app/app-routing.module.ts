import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InicioComponent} from './componentes/inicio/inicio.component'; 
import {QuienesomosComponent} from './componentes/quienesomos/quienesomos.component'; 
import {IniciasesionComponent} from './componentes/iniciasesion/iniciasesion.component'; 
import {RegistrateComponent} from './componentes/registrate/registrate.component'; 
import {FooterComponent} from './componentes/footer/footer.component';

import { AdminComponent } from './componentes/admin/admin.component';
import { AddPeliculasComponent } from './componentes/add-peliculas/add-peliculas.component';
import { ReservasComponent } from './componentes/reservas/reservas.component'; 

const routes: Routes = [

  {path:'inicio', component:InicioComponent},
  {path:'quienesomos', component:QuienesomosComponent},
  {path:'iniciasesion',component:IniciasesionComponent},
  {path:'registrate',component:RegistrateComponent},
  {path: 'footer',component:FooterComponent},
  {path:'admin', component:AdminComponent},
  {path:'add-peliculas',component:AddPeliculasComponent},
  {path: 'reservas',component:ReservasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
