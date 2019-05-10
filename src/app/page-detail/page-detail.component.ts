import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue, CollNote } from '../models/Collegue';
import { Subscription } from 'rxjs';
import { Note } from '../models/Note';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {
  col:Collegue = new Collegue('','','','',undefined,'',undefined, '', []);
  actionSub:Subscription
  comment:Note = new Note(undefined, '', undefined)
  listeCollNote:Collegue[]
  //colNote:CollNote = new CollNote('','','','',undefined, '',[])

  constructor(private _serv:DataService) { }

  ngOnInit() 
  {
  this.actionSub = this._serv.recupererCollegueCourant().subscribe(
    (valeurObtenue) => {this.col = valeurObtenue},
    error => {alert(error.error)},
    () => {});
  }

  ajouterNoteCourante()
  {
    let tmp = this._serv.chercherColleguePourNote(this.col.matricule)
      .subscribe (valeur => {},
      response => {alert(response.error)},
      () => {} );

      
  }

  ngOnDestroy()
  {
    // désabonnement du composant avant sa destruction
    this.actionSub.unsubscribe();      
  }

}
