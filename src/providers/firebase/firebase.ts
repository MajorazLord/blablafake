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

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }

  getUsersItems() {
    return this.afd.list('/usersItems/');
  }

  addUserItem(user) {
    this.afd.list('/usersItems/').push(user);
  }

  removeUserItem(id) {
    this.afd.list('/usersItems/').remove(id);
  }
}
