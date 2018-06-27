import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*//*
@Injectable()
export class FirebaseProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FirebaseProvider Provider');
  }

}*/

import {AngularFireDatabase, AngularFireList, snapshotChanges} from 'angularfire2/database';
import {User} from "../../model/user";
import {FirebaseDatabase} from "angularfire2";
import {FirebaseListObservable} from "angularfire2/database-deprecated";
import * as firebase from "firebase";
import {database} from "firebase";

@Injectable()
export class FirebaseProvider {

  public users: AngularFireList<any>;

  public key : String;

  constructor(public afd: AngularFireDatabase) {
  }

  getUsersItems() {
    return this.afd.list('/usersItems/');
  }

  addUserItem(user) {
    this.afd.list('/usersItems/').push(user);
  }

  removeUserItem(id) {
    this.afd.list('/usersItems/').remove(id);
  }

  addJourney(journey){
    //var userKey = '/usersItems/'+this.getKeyUserByMail();
    //console.log(userKey);
    this.afd.list('/usersItems/'+this.getKeyUserByMail()).update('journeys', [journey]);
    //this.afd.list('/usersItems/-LFl1mWxIK9TfHLmZsA5').update('journeys', [journey]);
    //this.getKeyUserByMail(journey)
  }

  getKeyUserByMail(){

    var user = firebase.auth().currentUser;

    if (user != null) {
      this.users = this.afd.list('/usersItems/', ref => ref.orderByChild('mail').equalTo(user.email));

      // query: {orderByChild: 'mail', equalTo: 'a@a.aa' }});
      // this.users[0].update('journeys', journey);
      this.users.query.once('value', snapshot => {
        (<String>(Object.keys(snapshot.val())[0]))
      });
      //console.log(this.key.split("\""));
      return "-LFl1mWxIK9TfHLmZsA5";
      //return this.users.;
      //return new User("","","","",new Date(),[]);
    }
  }
}
