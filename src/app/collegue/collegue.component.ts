import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']

})

export class CollegueComponent implements OnInit {
  @Input() col:Collegue

  affichageStandard = true

  constructor(private _serv:DataService) { }

  ngOnInit() {}

  modifierCollegue()
  {
    this.affichageStandard = !this.affichageStandard;
  }

  creerCollegue()
  {
    alert("Création d'un nouveau collègue");
  }

}
