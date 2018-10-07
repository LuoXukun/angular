import { Component, OnInit, Input } from '@angular/core';

import { Hero } from "../hero";

@Component({
  selector: 'app-hero-child',
  template: `
    <h3>"{{name}}"</h3>
  `,
  styles: []
})
export class HeroChildComponent implements OnInit {

  private _name = '';

  @Input()
  set name(name : string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name(): string {
    return this._name;
  }

  constructor() { }

  ngOnInit() {
  }

}
