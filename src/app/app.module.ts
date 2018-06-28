import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {LoginPage} from "../pages/login/login";
import {DatePicker} from "@ionic-native/date-picker";
import {SignupPage} from "../pages/signup/signup";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { StorageProvider } from '../providers/storage/storage';
import {ModifComptePage} from "../pages/modif-compte/modif-compte";

import {HttpModule} from "@angular/http";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";
import {TrajetsPage} from "../pages/trajets/trajets";
import {AngularFirestoreModule} from "angularfire2/firestore";
import { FirestoreProvider } from '../providers/firestore/firestore';
import {AddTrajetPage} from "../pages/add-trajet/add-trajet";

const config = {
  apiKey: "AIzaSyBHc-RtUeJVhmldE-gYwGHuLAamQuWEzuw",
  authDomain: "blablafake-37f77.firebaseapp.com",
  databaseURL: "https://blablafake-37f77.firebaseio.com",
  projectId: "blablafake-37f77",
  storageBucket: "blablafake-37f77.appspot.com",
  messagingSenderId: "720963760668"
};


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ModifComptePage,
    TrajetsPage,
    AddTrajetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ModifComptePage,
    TrajetsPage,
    AddTrajetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    StorageProvider,
    FirestoreProvider
  ]
})
export class AppModule {}
