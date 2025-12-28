import {Component, signal} from '@angular/core';
import {Header} from './components/header/header';
import {Intro} from './components/intro/intro';
import {Products} from './components/products/products';

@Component({
  selector: 'app-root',
  imports: [Header, Intro, Products],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pizza-cheff-test');
}
