import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`input[type=text]{
    color : blue
}`]
})
export class AppComponent {
  title = 'app';
}
