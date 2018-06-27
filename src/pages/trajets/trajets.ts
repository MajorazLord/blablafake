import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from "firebase";
import {Journey} from "../../model/journey";
import {User} from "../../model/user";
import {FirebaseProvider} from "../../providers/firebase/firebase";

/**
 * Generated class for the TrajetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trajets',
  templateUrl: 'trajets.html',
})
export class TrajetsPage {

  public j : Journey

  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseProvider: FirebaseProvider) {
    this.j = new Journey("etyr",["",""],"","",new Date(),new Date(),"")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrajetsPage');
  }

  ajoutTrajet() {
    this.firebaseProvider.addJourney(this.j);
  }

  reserveTrajet() {

  }
}
