import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {ModifComptePage} from "../modif-compte/modif-compte";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {TrajetsPage} from "../trajets/trajets";



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

  private loginForm : FormGroup;
  loginError: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder : FormBuilder, private auth: AuthServiceProvider ) {

    this.loginForm= this.formBuilder.group({
      mail: ['', Validators.compose([Validators.minLength(1), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      psw: ['', Validators.compose([Validators.minLength(8), Validators.required])]
    });

    // this.loginForm= new FormGroup({
    //   mail: new  FormControl(),
    //   psw : new  FormControl()
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onClickSeConnecter(){
    this.navCtrl.push(TrajetsPage);
  }

  onClickSinscrire(){
    this.navCtrl.push(SignupPage);
  }

  onClickModifCompte(){
    this.navCtrl.push(ModifComptePage);
  }

  login() {
    let data = this.loginForm.value;

    if (!data.mail) {
      return;
    }

    let credentials = {
      mail: data.mail,
      psw: data.psw
    };
    this.auth.signInWithEmail(credentials)
      .then(
        () => this.navCtrl.push(TrajetsPage),
        error => this.loginError = error.message
      );
  }
}
