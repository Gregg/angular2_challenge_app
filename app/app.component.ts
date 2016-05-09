import { Component } from '@angular/core';
import { RacesComponent } from './races.component';

@Component({
  selector: 'racing-app',
  template: `<h1>{{heading}}</h1>
<my-races></my-races>
`,
  directives: [RacesComponent]
})
export class AppComponent {
  heading = "Ultra Racing Schedule"
}
