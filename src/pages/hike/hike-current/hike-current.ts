import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-hike-current',
  templateUrl: 'hike-current.html',
})
export class HikeCurrentPage implements OnInit {

  private hikeCurrent;
  private timeHike: any;

  private currentForm: FormGroup;
  private difficultControl: FormControl;
  private remarkControl: FormControl;
  private dateControl: FormControl;

  private leg = {
    date: this.timeHike
  }

  private difficulties: any[] = [
    { viewValue: 'Très Difficile', value: 'vary hard' },
    { viewValue: 'Difficile', value: 'hard' },
    { viewValue: 'Moyenne', value: 'medium' },
    { viewValue: 'Facile', value: 'easy' },
    { viewValue: 'Très Facile', value: 'very easy' },
  ]

  constructor(
    private _builder: FormBuilder,
    private viewCtrl: ViewController,
    private navParams: NavParams) { }

  ngOnInit() {
    this.difficultControl = new FormControl('', Validators.compose([Validators.required]));
    this.remarkControl = new FormControl('', Validators.compose([Validators.required]));
    this.dateControl = new FormControl('', Validators.compose([Validators.required]))
    this.currentForm = this._builder.group({
      difficultControl: this.difficultControl,
      remarkControl: this.remarkControl,
      dateControl: this.dateControl
    });
  }

  ionViewWillEnter() {
    this.hikeCurrent = this.navParams.get('hike');
    this.timeHike = this.navParams.get('time');
  }

  validateButton(form: FormGroup) {
    console.log('currentForm', form);
    this.viewCtrl.dismiss({ form: form })
  }

  back() {
    this.viewCtrl.dismiss();
  }

}
