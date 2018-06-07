import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModifComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modif-compte',
  templateUrl: 'modif-compte.html',
})
export class ModifComptePage {

  fName : String;
  sName : String;
  mail : String;
  psw : String;
  bDate : Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifComptePage');
  }

}
