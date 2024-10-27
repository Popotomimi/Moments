import { Component } from '@angular/core';

import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Frederico", type: "Dog", age: 15},
    {name: "Hercules", type: "Dog", age: 4},
    {name: "Mel Radical", type: "Cat", age: 22},
    {name: "Bob", type: "Horse", age: 55},
  ]

  animalDetails = ''

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }
}
