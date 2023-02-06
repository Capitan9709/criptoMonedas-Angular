import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DatosMonedasComponent } from './datos-monedas/datos-monedas.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetallesMonedaComponent } from './detalles-moneda/detalles-moneda.component';

const routes: Routes = [
  { path: 'monedas', component: DatosMonedasComponent },
  { path: 'detalles/:id', component: DetallesMonedaComponent},
  { path: '', component: LandingPageComponent }
];

// Se escribe <router-outlet></router-outlet> donde queres que se aplique

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
