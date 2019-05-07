import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Collegue} from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-creation-collegue',
  templateUrl: './creation-collegue.component.html',
  styleUrls: ['./creation-collegue.component.css']
})
export class CreationCollegueComponent implements OnInit {
  @Output() creationCollegue:EventEmitter<Boolean> = new EventEmitter<Boolean>()
  col:Collegue = new Collegue('','','','',undefined,'');

  constructor(private _serv:DataService) { }
  ngOnInit() {}

  creerCollegue()
  {
    this._serv.creerCollegueCourant(this.col)
      .subscribe (valeur => {alert(valeur.matricule); this.afficherBouton()},
      response => {alert(response.error)},
      () => {} );
  }

  afficherBouton()
  {
    this.creationCollegue.emit(false);
  }
}
