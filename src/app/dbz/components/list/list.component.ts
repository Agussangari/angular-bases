import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characteList: Character[] = [{
    name: 'Trunks',
    power: 10,
  }]
  // onDelete (index: number) : void {
    // index value
  // }
  @Output()
  public onDelete: EventEmitter <string> = new EventEmitter()

  onDeleteCharacter (id? : string) : void {
    //emitir el id del personaje
    if( !id) return;
    console.log({id});
    this.onDelete.emit(id);
  }


}
