import { Component } from '@angular/core';
import {Button} from '../../ui/button/button';
import {ScrollService} from '../../services/scroll.service';

@Component({
  selector: 'app-intro',
  imports: [
    Button
  ],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class Intro {
  constructor(public scrollService: ScrollService) {}

  public scrollToProducts() {
    this.scrollService.scrollTo('products-section');
  }
}
