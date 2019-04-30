import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
import { listeMatricule } from './mock/matricules.mock';

@Component({
  selector: 'app-root',
  template: `
  <div class="container"> 
    <div class="row"> 

    <div class="col-sm-6">
      <app-recherche-collegue-par-nom [liste]="uneListeMatriculeFourni"></app-recherche-collegue-par-nom>
    </div>

      <div class="col-sm-6">
        <app-collegue [col]="unObjetCollegueFourni" ></app-collegue> 
      </div>

    </div>
  </div>
  `
})
export class AppComponent {
  unObjetCollegueFourni = collegueMock;
  uneListeMatriculeFourni = listeMatricule;
}