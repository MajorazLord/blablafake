import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireList } from 'angularfire2/database';
import {User} from "../../model/user";
import {FormBuilder, FormControlName, FormGroup, Validators} from "@angular/forms";

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
  private formulaire : FormGroup;


  userItems: AngularFireList<{}>;
  newItem = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,  public firebaseProvider: FirebaseProvider, private formBuilder : FormBuilder ) {

    this.today = new Date();
    this.userItems = this.firebaseProvider.getUsersItems();
    this.formulaire = this.formBuilder.group({
      sName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      fName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      mail: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      psw: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      bDate: ['', Validators.compose([ Validators.required])]

    });
  }

  addUserItem() {
    this.firebaseProvider.addUserItem(new User(this.formulaire.value['mail'],this.formulaire.value['psw'], this.formulaire.value['fName'], this.formulaire.value['sName'], this.formulaire.value['bDate']));

  }

  removeUserItem(id) {
    this.firebaseProvider.removeUserItem(id);
  }

  signupForm(){
      this.addUserItem();

  }

}
