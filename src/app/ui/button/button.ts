import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() public size: 'sm' | 'md' | 'lg' = 'md';
  @Input() public type: 'button' | 'submit' = 'button';
}
