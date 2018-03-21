import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-hike-current',
  templateUrl: 'hike-current.html',
})
export class HikeCurrentPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) { }

  ionViewDidLoad() { }

}
