import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name = 'ironman'
  age = 45

  get capitalizeName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero() {
    this.name = 'spiderman'
  }

  changeAge() {
    this.age =  Math.floor(Math.random() * (50 - 18) + 18)
  }
}
