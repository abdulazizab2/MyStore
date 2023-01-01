import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { ProductItem } from '../models/ProductItem';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productItemList: ProductItem[] = [];
  constructor() {}

  addProductItem(productItem: ProductItem): ProductItem[] {
    const itemIndex = this.productItemList.findIndex(
      (item) => item.id === productItem.id
    );
    if (itemIndex > -1) {
      this.productItemList[itemIndex].quantity += productItem.quantity;
      return this.productItemList;
    }
    this.productItemList.push(productItem);
    return this.productItemList;
  }
  getProductItems(): Observable<ProductItem[]> {
    return of(this.productItemList);
  }
  clearProductItem(cartItem: ProductItem): ProductItem[] {
    this.productItemList = this.productItemList.filter(
      (item) => item.id !== cartItem.id
    );
    return this.productItemList;
  }
  getCartTotal(): Observable<number> {
    var sum = 0;
    for (let i = 0; i < this.productItemList.length; i++) {
      sum += this.productItemList[i].price * this.productItemList[i].quantity;
    }
    return of(sum);
  }
}
