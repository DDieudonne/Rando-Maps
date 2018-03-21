import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HikeServiceProvider } from '../../providers/hike-service/hike-service';


@Component({
  selector: 'page-hike',
  templateUrl: 'hike.html',
})
export class HikePage {

  private hikes: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _hikeProvider: HikeServiceProvider
  ) { }

  ionViewWillEnter() {
    this._hikeProvider.getHikes().subscribe((data => {
      console.log('data', data);
    }))
  }

}
