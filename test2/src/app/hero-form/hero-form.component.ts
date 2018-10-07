import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {this.submitted = true;}

  get diagnostic() {return JSON.stringify(this.model);}

  constructor() { }

  ngOnInit() {
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

}
