import {Component, signal} from '@angular/core';
import {Header} from './components/header/header';
import {Intro} from './components/intro/intro';

@Component({
  selector: 'app-root',
  imports: [Header, Intro],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pizza-cheff-test');
}
