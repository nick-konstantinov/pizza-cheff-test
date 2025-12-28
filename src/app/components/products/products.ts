import {Component, OnInit} from '@angular/core';
import {ProductCard} from '../product-card/product-card';
import {Product} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductCard
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
