import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

import {Subject} from "rxjs";
import { Collegue, CollModifie, CollGallerie } from '../models/Collegue';
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private action = new Subject<Collegue>();
  private listePhoto = new Subject<CollGallerie[]>();

  constructor(private _requete:HttpClient) { }

  rechercherParNom(nom: string): Observable<string[]>  
  {
    let obs$: Observable<string[]> = this._requete.get<string[]>(`${environment.backendUrl}?nom=${nom}`);
    return obs$;
  }

  afficherCollegue(mat:string) :Observable<Collegue>
  {
    return this._requete.get<Collegue>(`${environment.backendUrl}/${mat}`)
    .pipe(tap (col => this.action.next(col) ) ) //next c'est pour stocker la valeur != iterator
  }

  recupererCollegueCourant() :Observable<Collegue>
  {
    return this.action.asObservable();
  }

  modifierCollegueCourant(mat:string, colModif:CollModifie)
  {
    return this._requete.patch<Collegue>(`${environment.backendUrl}/${mat}`, colModif );
  }

  creerCollegueCourant(colCree:Collegue)
  {
    return this._requete.post<Collegue>(`${environment.backendUrl}/`, colCree);
  }

  afficherPhoto() :Observable<CollGallerie[]>
  {
    return this._requete.get<CollGallerie[]>(`${environment.backendUrl}/gallerie`)
    .pipe(tap (colGal => this.listePhoto.next(colGal) ) )
  }

  ajouterNote(mat:string) :Observable<Collegue>
  {
    /*
    return this._requete.get<Collegue>(`${environment.backendUrl}/gallerie/${mat}`)
    .pipe(tap (coll => this.listePhoto.next(coll) ) )
    */
  }

}
