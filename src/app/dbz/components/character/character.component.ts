import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dbz-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  @Output()
  onNewCharacter : EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  } // aca lo que hago es inicializarlo al momento de crear este objeto con sus propiedad

  emitCharacter():void{

    if ( this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character)

    this.character = {name: '', power: 0}
  }

}
