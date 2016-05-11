import { Component } from '@angular/core';
import { RacesComponent } from './races.component';
import { RaceService } from './race.service';

@Component({
  selector: 'racing-app',
  template: `
<header class="container">
  <h1>{{heading}}</h1>
</header>
<my-races></my-races>
`,
  directives: [RacesComponent],
  providers:[RaceService]
})
export class AppComponent {
  heading = "Ultra Racing Schedule"
}
