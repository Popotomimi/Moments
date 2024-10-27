import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css'
})
export class IfRenderComponent {
  canShow: boolean = true;
  name = "Roberto"

}
