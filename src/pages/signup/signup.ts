import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireList } from 'angularfire2/database';
import {User} from "../../model/user";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  today : Date ;
  nom : String;
  prenom : String;
  mail : String;
  mdp : String;
  ddn : Date;


  userItems: AngularFireList<{}>;
  newItem = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,  public firebaseProvider: FirebaseProvider) {

    this.today = new Date();
    this.userItems = this.firebaseProvider.getUsersItems();
  }

  addUserItem() {
    this.firebaseProvider.addUserItem(new User(this.mail, this.mdp, this.prenom, this.nom, this.ddn));
  }

  removeUserItem(id) {
    this.firebaseProvider.removeUserItem(id);
  }


}
