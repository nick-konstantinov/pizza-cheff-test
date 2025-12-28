import {Component, Input} from '@angular/core';
import {Button} from '../../ui/button/button';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input({required: true}) product!: Product;
  public isModalOpen: boolean = false;

  public openModal(): void {
    this.isModalOpen = true;
  }

  public closeModal(): void {
    this.isModalOpen = false;
  }
}
