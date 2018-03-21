import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-hike-details',
  templateUrl: 'hike-details.html',
})
export class HikeDetailsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {}

  ionViewDidLoad() { }

}
