import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Journey} from "../../model/journey";
import {FirestoreProvider} from "../../providers/firestore/firestore";
import {User} from "../../model/user";

/**
 * Generated class for the AddTrajetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-trajet',
  templateUrl: 'add-trajet.html',
})
export class AddTrajetPage {

  private addTrajetForm : FormGroup;
  public trajet :Journey;
  trajets = [];

  private usTemp : User;


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder : FormBuilder, public firestore: FirestoreProvider) {
    this.addTrajetForm= this.formBuilder.group({
      vd:['', Validators.compose([Validators.minLength(1), Validators.required])],
      va: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      hd: ['', Validators.compose([Validators.minLength(1),  Validators.required])],
      ha: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      p : ['', Validators.compose([Validators.minLength(1), Validators.pattern('[1234]'), Validators.required])],
      px: ['', Validators.compose([Validators.minLength(1), Validators.pattern('[0123456789]*'), Validators.required])]
    });
    //this.trajets= new Journey[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTrajetPage');
  }

  addTrajet(){
    this.trajet=new Journey("Alphonse",[],this.addTrajetForm.value['vd'],this.addTrajetForm.value['va'],this.addTrajetForm.value['hd'],this.addTrajetForm.value['ha'],this.addTrajetForm.value['p'],this.addTrajetForm.value['px']);
   // this.usTemp=this.firestore.af.collection("utilisateurs").doc("IhR2LmbDcqF3lhZmYCKf").ref.get();
    this.trajets.fill(this.trajet);
    this.usTemp=new User("IhR2LmbDcqF3lhZmYCKf","alphonse.droitdlm@gmail.fr","azerty12345","Alphonse","DroitDansLMur",new Date(),[this.trajet]);
    let newJourney={
      driverName : "Alphonse",
      passengers : [],
      villeDepart :this.trajet.startTown ,
      villeArrivee : this.trajet.endTown,
      heureDepart :this.trajet.startDate ,
      heureArrivee : this.trajet.endDate,
      nbPlaces :this.trajet.nbPlace ,
      prix : this.trajet.price
    };

    let newUser = {
      uid: "IhR2LmbDcqF3lhZmYCKf",
      mail: "alphonse.droitdlm@gmail.fr",
      psw: "azerty12345",
      fName: "Alphonse",
      sName: "DroitDansLMur",
      bDate: new Date(),
      journeys : [newJourney]

    };
    this.firestore.af.collection("utilisateurs").doc("IhR2LmbDcqF3lhZmYCKf").set(newUser);
    this.navCtrl.pop();
  }

}
