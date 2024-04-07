import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class DbzMainPageComponent {
  characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  }, {
    name: 'Goku',
    power: 9500
  }]
}
