import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTrajetPage } from './add-trajet';

@NgModule({
  declarations: [
    AddTrajetPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTrajetPage),
  ],
})
export class AddTrajetPageModule {}
