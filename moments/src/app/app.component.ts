import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = "Jorguinho"
  age = 55
  information = {
    job: "Desenvolvedor",
    hobie: "skatear"
  }

  title = 'moments';
}
