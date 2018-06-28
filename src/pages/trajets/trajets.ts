import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Journey} from "../../model/journey";
import {User} from "../../model/user";
import {FirestoreProvider} from "../../providers/firestore/firestore";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {AngularFirestoreCollection} from "angularfire2/firestore";
import {AddTrajetPage} from "../add-trajet/add-trajet";


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

  public j: Journey;
  private user: User = {
    id: "",
    mail: "",
    psw: "",
    fName:"",
    sName:"",
    bDate: new Date(),
    journeys: []
  };
  usersRef :AngularFirestoreCollection<User> ;



  constructor(public navCtrl: NavController, public navParams: NavParams,public firestore: FirestoreProvider, public auth : AuthServiceProvider) {
    this.j = new Journey("etyr",["",""],"","",new Date(),new Date(),"","");
    this.auth.isAutentified().then((authentified)=>{
      console.log(authentified);

      //var users = this.firestore.af.collection("utilisateurs", ref => ref.where("mail","==",this.user.mail));


      //this.usersRef=this.firestore.af.collection<User>("utilisateurs");

      // var user = this.usersRef.snapshotChanges().map(actions=>{
      //
      // });
      //var user = this.firestore.getUser(usr.uid);
    });
  }

  ionViewDidLoad() {
    Object.assign(this.user, this.auth.cUser);
    //console.log(this.user.mail);
  }

  ajoutTrajet() {
    //this.firestore.addJourney(this.j);
    this.navCtrl.push(AddTrajetPage);
  }

  reserveTrajet() {

  }


}
