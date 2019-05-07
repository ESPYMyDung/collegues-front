import { Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';
import { CollGallerie, Collegue } from '../models/Collegue';


@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {
  collegue:Collegue
  listeCollGall :CollGallerie[]
  afficheTrombi = true

  constructor(private _serv:DataService)
  { }

  ngOnInit()
  {        
    this._serv.afficherPhoto()
    .subscribe( coll => {this.listeCollGall = coll},
      error =>{alert('oops gallerie')} );
   }

  recupererColl(mat:string)
  {
    this._serv.afficherCollegue(mat)
    .subscribe( coll => {},
      error =>{alert('oops affichage')} );
  }

  /*chargerCollegue()
  {
    this._serv.recupererCollegueCourant().subscribe(
      (valeurObtenue) => {this.collegue = valeurObtenue},
      error => {alert(error.error)},
      () => {});
  }*/

}
