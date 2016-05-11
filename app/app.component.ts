import { Component } from '@angular/core';
import { RacesComponent } from './races.component';


@Component({
  selector: 'racing-app',
  template: `
<header class="container">
  <h1>{{heading}}</h1>
</header>
<my-races></my-races>
`,
  directives: [RacesComponent]
})
export class AppComponent {
  heading = "Ultra Racing Schedule"
}
