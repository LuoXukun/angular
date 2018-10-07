import { Component, OnInit } from '@angular/core';

import { HEROES } from "../hero";

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{master}} controls {{names.length}} names</h2>
    <app-hero-child *ngFor="let name of names"
      [name]="name">
    </app-hero-child>
  `,
  styles: []
})
export class HeroParentComponent implements OnInit {

  names = ['Mr. IQ', '    ', ', ', ' Bombasto '];
  master = 'Master';

  constructor() { }

  ngOnInit() {
  }

}
