import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {ModifComptePage} from "../modif-compte/modif-compte";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onClickSeConnecter(){
    //TODO Check si les identifiants sont juste
    //this.navCtrl.push(SignupPage);
  }

  onClickSinscrire(){
    //TODO Check si les identifiants sont juste
    this.navCtrl.push(SignupPage);
  }

  onClickModifCompte(){
    this.navCtrl.push(ModifComptePage);
  }

}
