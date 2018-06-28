import { Component } from '@angular/core';
import {IonicPage, List, NavController, NavParams} from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';
import {User} from "../../model/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginPage} from "../login/login";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {Journey} from "../../model/journey";
import {FirestoreProvider} from "../../providers/firestore/firestore";
import {TrajetsPage} from "../trajets/trajets";

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
  newUser : User;
  signUpError: string;
  trajets: Journey[] = [];


  userItems: AngularFireList<{}>;
  newItem = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,  public fp: FirestoreProvider, private formBuilder : FormBuilder, private auth: AuthServiceProvider ) {

    this.today = new Date();
    //this.userItems = this.fireStore.getUsersItems();
    this.formulaire = this.formBuilder.group({
      sName: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      fName: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      mail: ['', Validators.compose([Validators.minLength(1), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      psw: ['', Validators.compose([Validators.minLength(8), Validators.required])],
      bDate: ['', Validators.compose([ Validators.required])]
    });
  }

  addUserItem() {
   // this.auth.signInWithEmail()
    //this.firebaseProvider.addUserItem(new User(this.formulaire.value['mail'],this.formulaire.value['psw'], this.formulaire.value['fName'], this.formulaire.value['sName'], this.formulaire.value['bDate']));
    this.newUser = new User(this.fp.createId(),this.formulaire.value['mail'],this.formulaire.value['psw'], this.formulaire.value['fName'], this.formulaire.value['sName'], this.formulaire.value['bDate'],  this.trajets);

    this.auth.signupUser(this.newUser).then(
      () => this.navCtrl.push(LoginPage),
      error => this.signUpError = error.message
    );
    /*this.auth.createUserWithEmailAndPassword(this.formulaire.value.mail,this.formulaire.value.psw).then((user)=>{
      user.sName=this.formulaire.value.sName;
      user.fName=this.formulaire.value.fName;
      user.id=this.formulaire.value.id;
      user.bDate=this.formulaire.value.bDate;
      this.fp.addUser(user).then((res)=>{
        this.auth.currentUser=user;
        this.navCtrl.setRoot(LoginPage);
      }).catch((err)=>{
        console.error(err);
      })
    });*/

  }

  removeUserItem(id) {
    //this.fireStore.removeUserItem(id);
  }

  signupForm(){
      this.addUserItem();
      //this.navCtrl.push(LoginPage);

  }

}
