import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']



})

export class CollegueComponent implements OnInit {
  @Input() col:Collegue


  //col:Collegue = new Collegue("azigueguagua", "Lovegood", "Luna", "llovegood@rookery.com",new Date(1981,1,15), "à completer")
  //constructor() { }

  ngOnInit() {}

  
/*
  modifierCollegue(saisie: HTMLInputElement) {
    //this.Modifier = !this.Modifier;

    saisie.value = '';
    saisie.focus();
  }*/

}
