import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-characters',
  templateUrl: './add-characters.component.html',
})
export class AddCharactersComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter()

  character: Character = {
    name: '',
    power: 0
  }

  emitCharacter() {
    if(this.character.name.length === 0) return

    this.onNewCharacter.emit(this.character)

    this.character = { name: '', power: 0 }
  }
}
