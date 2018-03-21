import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HikePage } from './hike';
import { HikeDetailsPage } from './hike-details/hike-details';
import { HikeCurrentPage } from './hike-current/hike-current';
import { StartPage } from '../start/start';

@NgModule({
  declarations: [
    HikePage,
    HikeCurrentPage,
    HikeDetailsPage,
    StartPage
  ],
  entryComponents: [
    HikeCurrentPage,
    HikeDetailsPage,
    StartPage
  ],
  imports: [
    IonicPageModule.forChild(HikePage),
  ],
  providers:[]
})
export class HikePageModule {}
