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

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ModifComptePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    StorageProvider
  ]
})
export class AppModule {}
