import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
import { listeMatricule } from './mock/matricules.mock';

@Component({
  selector: 'app-root',
  template: `
  <app-collegue [col]="unObjetCollegueFourni" ></app-collegue> 

  <app-recherche-collegue-par-nom [liste]="uneListeMatriculeFourni"></app-recherche-collegue-par-nom>
  `
})
export class AppComponent {
  unObjetCollegueFourni = collegueMock;
  uneListeMatriculeFourni = listeMatricule;
}