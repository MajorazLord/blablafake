import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifComptePage } from './modif-compte';

@NgModule({
  declarations: [
    ModifComptePage,
  ],
  imports: [
    IonicPageModule.forChild(ModifComptePage),
  ],
})
export class ModifComptePageModule {}
