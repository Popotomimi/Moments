import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: String = "Roberto";
  age: number = 28;
  job = "Programador front-end";
  hobbies = ["Skate", "Jogar", "Estudar"]
  car = {
    name: "Voyage",
    year: 2011
  }

  constructor() {}

}
