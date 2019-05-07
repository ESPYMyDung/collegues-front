import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GallerieComponent } from './gallerie/gallerie.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
//import { CComponent } from './c.component';

export const routes: Routes = 
[
  { path: 'accueil', component: AccueilComponent },
  { path: 'gallerie', component: GallerieComponent },
  { path: 'gallerie/:mat', component: PageDetailComponent },
  { path: 'apropos', component: AproposComponent },
  
  /*path: 'pizzas/:pizzaId',
    component: PizzaDetailComponent,
    children: [
        { path: '', pathMatch: 'full', redirectTo: 'caracteristiques' },
        { path: 'avis', component: AvisPizzaComponent },
        { path: 'caracteristiques', component: CaracteristiquesComponent }
    ]*/

  // redirection par défault vers /xxx un seul a faire!!!!
  //{ path: '', pathMatch: 'full', redirectTo: '/accueil' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
