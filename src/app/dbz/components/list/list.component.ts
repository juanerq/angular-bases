import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  characterList: Character[] = []

  @Output()
  onDelete = new EventEmitter<string>()

  onDeleteCharacter(id?: string) {
    if(!id) return
    this.onDelete.emit(id)
  }
}
