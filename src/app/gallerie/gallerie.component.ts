import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CollGallerie} from '../models/Collegue';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {
  listeCollGall :CollGallerie[]
  affichageColl = false

  constructor(private _serv:DataService) { }

  ngOnInit() {  }

  recupererPhoto()
  {
    this._serv.afficherPhoto()
    .subscribe( coll => {this.listeCollGall = coll},
      error =>{alert('oops gallerie')} ); //pour la gestion d'erreur principalement
  }

  recupererColl()
  {
    this.affichageColl = true
    //return coll
  }

  afficherListe()
  { this.affichageColl = false }

}
