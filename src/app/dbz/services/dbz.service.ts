  import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

  @Injectable({
    providedIn: 'root'
  })
  export class DbzService {

  //el momento en el que no sabemos que tipo de dato es es mejor
  // definirlo en el momento y evitar el any.
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 950
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character : Character):void {
    const newCharacter: Character = {
      id: uuid(), ...character};// aca lo que hace e susar el operador spread del character,
                              // toma todas las propiedades de character y las exparse en este nuevo objeto
                              // siempre va primero el spread y luego lo que quiero sobreescribir en este caso el id
                              // es muy util esto por que no tengo que definir las propiedades para que las tome
                              //simplemente trae todas de la interface o lo que sea que este pasandole.

    this.characters.push(newCharacter);

  }

  // aca hay que hacer algo cuando recibimosel ondelete
  /// aca se implementa el METODO y de aca vamos al list component
  //onDeleteCharacter( index : number) {
    //this.characters.splice(index, 1)
  deleteCharacterById( id: string) {

    this.characters = this.characters.filter( character => character.id !== id )
  }

}
