import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';
import { ProductItem } from '../models/ProductItem';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  title = 'Your Shopping Cart';
  cartItems: ProductItem[] = [];
  cartTotal:number = 0;
  constructor(private cartService: CartService) {
  }
  ngOnInit(): void {
    this.cartService.getProductItems().subscribe((res) => {
      this.cartItems = res;
    });
  }
  updateCart(newCartItems: ProductItem[]): void {
    this.cartItems = newCartItems;
  }
  getCartTotal() {
    this.cartService.getCartTotal().subscribe((res) => {
      this.cartTotal = res;
    });
  }
}
