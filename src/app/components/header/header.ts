import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleBodyScroll();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.toggleBodyScroll(false);
  }

  private toggleBodyScroll(disable?: boolean): void {
    const body = document.body;
    const isDisable = disable !== undefined ? disable : this.isMenuOpen;

    if (isDisable) {
      body.classList.add('menu-open');
    } else {
      body.classList.remove('menu-open');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (event.target.innerWidth > 767 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
