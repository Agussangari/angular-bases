import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
/// los getter se ven como PROPIEDADES igual que las otras propiedades
  getHeroDescription(): string{
    return `${this.name} -  ${this.age}`
  }
  //ESTO ES UN METODO


  changeHero():void{
    this.name = 'Wolverine'

  }

  changeAge():void{
      this.age = 150
  }

  resetForm():void{
    this.name = 'Ironman'
    this.age = 45
}
}
