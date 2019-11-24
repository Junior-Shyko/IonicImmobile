import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailImmobilePage } from './detail-immobile';

@NgModule({
  declarations: [
    DetailImmobilePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailImmobilePage),
  ],
})
export class DetailImmobilePageModule {}
