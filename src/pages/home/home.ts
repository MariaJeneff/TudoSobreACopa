import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProgramacaoPage } from '../programacao/programacao';
//import { TseriePage } from '../tserie/tserie';
import { CopaPage } from '../copa/copa';
//import * as $ from "jquery";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  cadastrar(){
    this.navCtrl.push(ProgramacaoPage);
  }
  copa(){
    this.navCtrl.push(CopaPage);
  }
}
