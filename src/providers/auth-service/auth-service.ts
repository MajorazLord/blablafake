import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from "../../model/user";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";

@Injectable()
export class AuthServiceProvider {
  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  signInWithEmail(credentials) {
    console.log('Sign in with email'+credentials.mail+" "+credentials.psw);
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.mail, credentials.psw);
  }

  signupUser(user,firebaseProvider)  {
    console.log(user.mail + user.psw);
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(user.mail, user.psw).then(credential => {
        let newUser = {
          uid: credential.user.uid,
          mail: user.mail,
          psw: user.psw,
          fName: user.fName,
          sName: user.sName,
          bDate: user.bDate,
          journeys : []
        };
        resolve(newUser);
        firebaseProvider.addUserItem(newUser);
      }).catch(error => {
        reject(error);
      });
    })
  }






  // currentUser: User;
  //
  // public login(credentials) {
  //   if (credentials.email === null || credentials.password === null) {
  //     return Observable.throw("Please insert credentials");
  //   } else {
  //     return Observable.create(observer => {
  //       // At this point make a request to your backend to make a real check!
  //       let access = (credentials.password === "pass" && credentials.email === "email");
  //       //TODO Faire la connection
  //       //this.currentUser = new User('Simon', 'saimon@devdactic.com', '','', new Date(2018,6,6));
  //       observer.next(access);
  //       observer.complete();
  //     });
  //   }
  // }
  //
  // public register(credentials) {
  //   if (credentials.email === null || credentials.password === null) {
  //     return Observable.throw("Please insert credentials");
  //   } else {
  //     // At this point store the credentials to your backend!
  //     return Observable.create(observer => {
  //       observer.next(true);
  //       observer.complete();
  //     });
  //   }
  // }
  //
  // public getUserInfo() : User {
  //   return this.currentUser;
  // }
  //
  // public logout() {
  //   return Observable.create(observer => {
  //     this.currentUser = null;
  //     observer.next(true);
  //     observer.complete();
  //   });
  // }
}
