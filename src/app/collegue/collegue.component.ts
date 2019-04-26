import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']



})

export class CollegueComponent implements OnInit {
  @Input() col:Collegue

  ngOnInit() {}


  modifierCollegue()
  {
    alert(`Modification du collègue`);
  }


  creerCollegue()
  {
    alert("Création d'un nouveau collègue");
  }

}
