import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  template: `
  <app-collegue [col]="unObjetCollegueFourni"></app-collegue> 
  `
})
export class AppComponent {
  unObjetCollegueFourni = collegueMock;
}


// 