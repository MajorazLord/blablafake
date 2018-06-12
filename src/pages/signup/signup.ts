import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormControl, FormControlName, FormGroup, NgForm} from "@angular/forms";
import {LoginPage} from "../login/login";

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
  mail: string;
  psw: string;
  fName: string;
  sName: string;
  bDate: Date;
  submitted = false;
  constructor(public navCtrl: NavController, public navParams: NavParams ) {;

  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.navCtrl.push(LoginPage);
    }
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


}
