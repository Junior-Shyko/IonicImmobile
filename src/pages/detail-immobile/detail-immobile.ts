import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';

/**
 * Generated class for the DetailImmobilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-immobile',
  templateUrl: 'detail-immobile.html',
})
export class DetailImmobilePage {
  id_immobile: '';
  code: '';
  title : '';
  nameLocation: '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {
    this.id_immobile = navParams.get('id');
    console.log(this.id_immobile)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailImmobilePage');
    this.getImmobile();
  }
  

  getImmobile() {
     this.httpClient.get('http://localhost:3060/api/v1/immobile-id/'+this.id_immobile)
    .subscribe(data => {
      console.log('Imovel: ', data);
      this.code = data.immobiles_code;
      this.title = data.immobiles_property_title;
      this.nameLocation = data.immobiles_district+' - '+data.immobiles_city;
      
    })
    
  }

}
