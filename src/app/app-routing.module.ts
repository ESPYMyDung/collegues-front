import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GallerieComponent } from './gallerie/gallerie.component';
import { AccueilComponent } from './accueil/accueil.component';
//import { CComponent } from './c.component';

const routes: Routes = 
[
  { path: 'accueil', component: AccueilComponent },
  { path: 'gallerie', component: GallerieComponent },
  //{ path: 'apropos', component: CComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
