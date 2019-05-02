import { Injectable } from '@angular/core';
import { collegueMock } from '../mock/collegues.mock';
import { listeMatricule } from '../mock/matricules.mock';

import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _requete:HttpClient) { }

  rechercherParNom(nom: string): Observable<string[]>  
  {
    let obs$: Observable<string[]> = this._requete.get<string[]>(`${environment.backendUrl}?nom=${nom}`);
    return obs$;
    //return listeMatricule 
  }

  recupererCollegueCourant(){
    return collegueMock
  }
}
