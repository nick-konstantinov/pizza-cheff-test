import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProducts(): Product[] {
    return [
      {
        id: 1,
        title: 'Мясная Делюкс',
        description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
        image: 'assets/images/meat-deluxe.png',
      },
      {
        id: 2,
        title: 'Морская Премиум',
        description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
        image: 'assets/images/marine-premium.png',
      },
      {
        id: 3,
        title: 'Бекон и Сосиски',
        description: 'Бекон, сыр, сосиски, ананас, томатная паста',
        image: 'assets/images/bacon.png',
      },
      {
        id: 4,
        title: 'Куриная Делюкс',
        description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
        image: 'assets/images/chicken.png',
      },
      {
        id: 5,
        title: 'Барбекю Премиум',
        description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
        image: 'assets/images/bbq.png',
      },
      {
        id: 6,
        title: 'Пепперони Дабл',
        description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
        image: 'assets/images/pepperoni-double.png',
      },
      {
        id: 7,
        title: 'Куриное Трио',
        description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
        image: 'assets/images/chicken-trio.png',
      },
      {
        id: 8,
        title: 'Сырная',
        description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
        image: 'assets/images/cheese.png',
      },
    ];
  }
}
