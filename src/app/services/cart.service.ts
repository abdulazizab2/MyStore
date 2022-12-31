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
}
