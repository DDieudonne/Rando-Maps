import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { environement } from '../../../environment/evironment';
import { HikeCurrentPage } from '../hike-current/hike-current';
import { Hike } from '../../../interfaces/hike';

declare var google: any;

@Component({
  selector: 'page-hike-details',
  templateUrl: 'hike-details.html',
})
export class HikeDetailsPage implements OnInit {


  @ViewChild('map') mapRef: ElementRef;

  public hikeDetails;
  public isPositionVisible: boolean = true;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) { }


  ngOnInit(): void {
    this.hikeDetails = this.navParams.get('hike');
    console.log('hikeDetails', this.hikeDetails);
  }

  ionViewDidLoad(): void {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(this.hikeDetails.position.lat, this.hikeDetails.position.lng);
    const options = {
      center: location,
      zoom: 10,
      streeViewControl: false,
      mapTypeId: 'roadmap'
    }
    const maps = new google.maps.Map(this.mapRef.nativeElement, options);
    this.Marker(location, maps);
  }

  Marker(position, map) {
    return new google.maps.Marker({
      position,
      map
    })
  }


  showPossition() {
    this.isPositionVisible = !this.isPositionVisible;
  }

  addCommentary() {
    const Modal = this.modalCtrl.create(HikeCurrentPage, { hike: this.hikeDetails, time: new Date().toISOString() });
    Modal.onDidDismiss(data => {
      console.log('data', data);
    })
    Modal.present();
  }

  back() {
    this.navCtrl.popToRoot();
  }

}
