import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  show: boolean = false;

  showMessage(): void {
    this.show = !this.show
  }
  
  showMessageTwo(): void {
    this.show = !this.show
  }
}
