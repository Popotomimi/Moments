import { Component, input, Input  } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {
  @Input() name: string = "";
  @Input() age: number = 0;
  @Input() information!: {job: string, hobie: string} 

}
