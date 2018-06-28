import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from "../../model/user";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";
import {FirestoreProvider} from "../firestore/firestore";

@Injectable()
export class AuthServiceProvider {

  cUser: User;
  public authenti = false;
  res : string[];

  constructor(public afAuth: AngularFireAuth, public fp : FirestoreProvider) {
    this.cUser=new User("","","","","",null,[]);
  }

  isAutentified(){
    return new Promise((resolve)=>{
      /*this.afAuth.authState.subscribe(user=>{
        if(user!=null){
          console.log("subscribe ++");

          this.setUserConnected(user).then(()=>{
            resolve(this.authenti);
          });
        }else{
          console.log("subscribe null");
          this.currentUser=null;
        }
      })*/
      var usr= this.afAuth.auth.currentUser;
      if(usr!=null){
        console.log("true");
        console.log(usr.uid);
        this.cUser.mail=usr.email;
         var res = this.getDocuments("utilisateurs",usr.email).then((data)=>{
           return data;
         });
        console.log(JSON.stringify(res[0]));

        // var users = this.fp.af.collection("utilisateurs").where();
        // var user = this.fp.getUser(usr.uid);
        return true;
      }else{
        console.log("false");
        return false;
      }
    });
  }


  signInWithEmail(credentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.mail, credentials.psw);
  }

  signupUser(user)  {
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
        console.log();
        this.fp.addUser(newUser);
      }).catch(error => {
        reject(error);
      });
    })
  }



/*

  createUserWithEmailAndPassword(email : string, password : string) : Promise<User> {
    console.log(email + password);
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(credential => {
        let newUser = {

          id: credential.user.uid,
          mail: credential.user.email,
          psw: "",
          fName: "",
          sName:"",
          bDate: new  Date(),
          journeys : []
        };
        resolve(newUser);
        this.fp.addUser(newUser);
        //firebaseProvider.addUserItem(newUser);
      }).catch((error) => {
        reject(error);
      });
    })
  }*/

  setUserConnected(user): Promise<User>{
    return new Promise((resolve,reject)=> {
      this.fp.getUser(user.uid).then((userFb =>{
        if(userFb==null){
          this.cUser={
            id: user.uid,
            mail: user.email,
            psw: "",
            fName: "",
            sName: "",
            bDate: null,
            journeys : []
          };
          this.authenti=true;
          console.log(",k hg"+this.cUser.id);
          resolve(this.cUser);
        }else{
          let userC = JSON.parse(JSON.stringify(userFb));
          this.cUser={
            id: userC.uid,
            mail: userC.mail,
            psw: userC.psw,
            fName: userC.fName,
            sName: userC.sName,
            bDate: userC.bDate,
            journeys : userC.journeys
          };
          this.authenti=true;
          console.log("auth");
          console.log(this.cUser);
          resolve(this.cUser);
        }
      })).catch((err) => {
        reject(err);
      });
    });
  }


  getDocuments(collectionObj : string, mail : string) : Promise<any>
  {
    return new Promise((resolve, reject) =>
    {
      this.fp.af.collection(collectionObj).ref
        .get()
        .then((querySnapshot) =>
        {

          // Declare an array which we'll use to store retrieved documents
          let obj : any = [];


          // Iterate through each document, retrieve the values for each field
          // and then assign these to a key in an object that is pushed into the
          // obj array
          querySnapshot
            .forEach((doc : any) =>
            {
              console.log(mail);
              if (doc.data().mail== mail){
                obj.push({
                  id             : doc.id
                });
              }
            });


          // Resolve the completed array that contains all of the formatted data
          // from the retrieved documents
          resolve(obj);
        })
        .catch((error : any) =>
        {
          reject(error);
        });
    });
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
