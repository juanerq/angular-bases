import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }]

  addCharacter(character: Character) {
    const id = uuid()
    this.characters.push({...character, id})
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id)

  }
}
