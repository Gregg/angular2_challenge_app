import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

@Component({
  selector: 'racing-app',
  template: '<h1>{{heading}}</h1>'
})
export class AppComponent {
  heading = "Ultra Racing Schedule"
}
