import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GallerieComponent } from './gallerie/gallerie.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CollegueConnectComponent } from './collegue-connect/collegue-connect.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = 
[
  { path: 'accueil', component: AccueilComponent },
  { path: 'gallerie', component: GallerieComponent },
  { path: 'gallerie/:mat', component: PageDetailComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'auth', component: AuthentificationComponent },
  { path: 'logout', component: AuthentificationComponent },
  { path: 'me', component: CollegueConnectComponent },
  { path: '**', redirectTo: '/apropos'},

  // redirection par défault vers /xxx un seul a faire!!!!
  { path: '', pathMatch: 'full', redirectTo: '/auth' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
