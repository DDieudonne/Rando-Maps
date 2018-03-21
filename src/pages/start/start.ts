import { Component, animate } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HikePage } from '../hike/hike';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  goHikePage() {
    this.navCtrl.setRoot(HikePage)
  }

}