import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';
import { ProductItem } from '../models/ProductItem';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  title = 'Your Shopping Cart';
  cartItems: ProductItem[] = [];
  constructor(private cartService: CartService) {
  }
  ngOnInit(): void {
    this.cartItems = this.cartService.getProductItems(); 
  }
}
