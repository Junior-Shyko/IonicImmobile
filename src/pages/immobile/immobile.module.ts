import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImmobilePage } from './immobile';

@NgModule({
  declarations: [
    ImmobilePage,
  ],
  imports: [
    IonicPageModule.forChild(ImmobilePage),
  ],
})
export class ImmobilePageModule {}
