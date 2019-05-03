import { Injectable } from '@angular/core';
import { collegueMock } from '../mock/collegues.mock';
import { listeMatricule } from '../mock/matricules.mock';

import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

import {Subject} from "rxjs";
import { Collegue, CollModifie } from '../models/Collegue';
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private action = new Subject<Collegue>();

  constructor(private _requete:HttpClient) { }

  rechercherParNom(nom: string): Observable<string[]>  
  {
    let obs$: Observable<string[]> = this._requete.get<string[]>(`${environment.backendUrl}?nom=${nom}`);
    return obs$;
    //return listeMatricule 
  }

  afficherCollegue(mat:string) :Observable<Collegue>
  {
    //alert ("affichage en cours")
    return this._requete.get<Collegue>(`${environment.backendUrl}/${mat}`)
    .pipe(tap (col => this.action.next(col) ) ) //next c'est pour stocker la valeur != iterator
  }

  recupererCollegueCourant() :Observable<Collegue>
  {
    return this.action.asObservable();
    //return collegueMock
  }

  modifierCollegueCourant(mat:string, colModif:CollModifie)
  {
    return this._requete.patch<Collegue>(`${environment.backendUrl}/${mat}`, colModif );
  }


}
