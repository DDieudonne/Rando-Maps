import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HikeServiceProvider } from '../../providers/hike-service/hike-service';
import { HikeDetailsPage } from './hike-details/hike-details';

@Component({
  selector: 'page-hike',
  templateUrl: 'hike.html',
})
export class HikePage implements OnInit {


  private hikes: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _hikeProvider: HikeServiceProvider
  ) { }

  ngOnInit(): void {
    this.getHikes();
  }


  getHikes() {
    this._hikeProvider.getHikes().subscribe(data => {
      this.hikes = data;
    })
  }

  hikeSelected(hike: any) {
    this.navCtrl.push(HikeDetailsPage, { hike: hike });
  }

}
