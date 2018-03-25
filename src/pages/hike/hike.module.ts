import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HikePage } from './hike';
import { HikeDetailsPage } from './hike-details/hike-details';
import { HikeCurrentPage } from './hike-current/hike-current';
import { Start } from '../start/start';

@NgModule({
  declarations: [
    HikePage,
    HikeCurrentPage,
    HikeDetailsPage,
    Start
  ],
  entryComponents: [
    HikeCurrentPage,
    HikeDetailsPage,
    Start
  ],
  imports: [
    IonicPageModule.forChild(HikePage),
  ],
  providers: []
})
export class HikePageModule { }
