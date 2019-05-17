import { Component, OnInit } from '@angular/core';
import { CollConn } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collegue-connect',
  templateUrl: './collegue-connect.component.html',
  styleUrls: ['./collegue-connect.component.css']
})
export class CollegueConnectComponent implements OnInit {
  connecte:CollConn
  actionSub:Subscription

  constructor(private _serv:DataService) { }

  ngOnInit()
  {
    this.actionSub = this._serv.recupererCollConn().subscribe(
    (valeurObtenue) => {this.connecte = valeurObtenue},
    error => {alert(error.error)},
    () => {});
  }

}
