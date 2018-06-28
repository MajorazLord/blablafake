import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../../model/user";
import {AngularFirestore} from "angularfire2/firestore";

/*
  Generated class for the FirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreProvider {

  constructor(public af : AngularFirestore) {
  }

  createId(){
    return this.af.createId();
  }

  addUser(user){
    console.log("add "+user.uid);
   return this.af.collection("utilisateurs").doc(user.uid).set(user);
  }

  getUser(uid : string){
    console.log(uid);
    return new Promise((resolve, reject )=> {
      this.af.collection("utilisateurs").doc(uid).ref.get().then(result=> {
        let user = result.data();
        if (user!=undefined){
          resolve(user);
        }else{
          resolve(null);
        }
      }).catch((err)=>{
        reject(err);
      })
    });
  }

}
