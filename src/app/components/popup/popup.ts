import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.html',
  styleUrl: './popup.scss',
})
export class Popup {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
