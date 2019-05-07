import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { DataService } from './services/data.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { CreationCollegueComponent } from './creation-collegue/creation-collegue.component';
import { MenuComponent } from './menu/menu.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
//import { routes } from './app.routes'
import { RouterModule } from '@angular/router';
import { PageDetailComponent } from './page-detail/page-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreationCollegueComponent,
    MenuComponent,
    GallerieComponent,
    AccueilComponent,
    AproposComponent,
    PageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //pour faire les requetes http backend
    FormsModule, //pour genere les formulaires
    //RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
