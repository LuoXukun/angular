import { Component } from '@angular/core';

import { AdService } from "./ad.service";
import { AdItem } from "./ad-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  myHero: string;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  condition = false;

  ads: AdItem[];

  constructor(private adService: AdService) {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
    this.ads = this.adService.getAds();
  }
}
