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



import { FirebaseProvider } from '../providers/firebase/firebase';
import {HttpModule} from "@angular/http";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

const config = {
  apiKey: "AIzaSyCjTKlLDZUinLq46JRdSGzAAZWnu7fn8OY",
  authDomain: "ionicproject-66203.firebaseapp.com",
  databaseURL: "https://ionicproject-66203.firebaseio.com",
  projectId: "ionicproject-66203",
  storageBucket: "ionicproject-66203.appspot.com",
  messagingSenderId: "289406248876"
};


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ModifComptePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ModifComptePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    StorageProvider,
    FirebaseProvider
  ]
})
export class AppModule {}
