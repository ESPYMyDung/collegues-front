import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']



})

export class CollegueComponent implements OnInit {
  @Input() col:Collegue

  affichageStandard = true

  ngOnInit() {}


  modifierCollegue()
  {
    //alert(`Modification du collègue`);

    //a revoir
    this.affichageStandard = !this.affichageStandard;
  }


  creerCollegue()
  {
    alert("Création d'un nouveau collègue");
  }

}
