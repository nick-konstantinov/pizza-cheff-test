import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appNoDotsDirective]',
})
export class NoDotsDirective {
  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\./g, '');
  }
}
