import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { DetailImmobilePage} from '../detail-immobile/detail-immobile';

/**
 * Generated class for the ImmobilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-immobile',
  templateUrl: 'immobile.html',
})
export class ImmobilePage {
  public immobile : {};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImmobilePage');
    
    this.httpClient.get('http://localhost:3060/api/immobile-all')
    .subscribe(data => {
      console.log('my data: ', data);
      this.immobile = data;
    })
  }

  redirectToImmobile(immobile_id) {
    // this.httpClient.get('http://localhost:3060/api/v1/immobile-id/'+immobile_id)
    // .subscribe(data => {
    //   console.log('Imovel: ', data);
      
    // })
    this.navCtrl.push(DetailImmobilePage, {
      id: immobile_id
    });
  }

}
