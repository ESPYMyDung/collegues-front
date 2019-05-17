import { Component, OnInit } from '@angular/core';

import { Routes } from '@angular/router';
import { DataService } from '../services/data.service';
import { Utilisateur } from '../models/Utilisateur';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
affichage:boolean = true;

  constructor() { }

  ngOnInit() { }

}
