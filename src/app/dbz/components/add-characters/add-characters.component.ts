import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-characters',
  templateUrl: './add-characters.component.html',
})
export class AddCharactersComponent {
  character: Character = {
    name: '',
    power: 0
  }

  emitCharacter() {
    console.log(this.character)
  }
}
