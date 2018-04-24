import { Component } from '@angular/core';
import { HeroListComponent } from './hero/hero-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle = 'Angular Avenger';
}
