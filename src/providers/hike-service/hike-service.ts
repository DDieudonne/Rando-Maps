import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HikeServiceProvider {

  url = '../../assets/api/hike.json';

  constructor(public http: Http) {
    console.log('url', this.url);
  }

  getHikes() {
    return this.http.get(this.url).map(res => res.json());
  }

}
