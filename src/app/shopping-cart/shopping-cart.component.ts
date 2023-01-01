import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';
import { ProductItem } from '../models/ProductItem';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  title = 'Your Shopping Cart';
  cartItems: ProductItem[] = [];
  cartTotal: number = 0;
  fullname: string = '';
  email: string = '';
  creditCard: string = '';
  address: string = '';
  user: User;

  constructor(private cartService: CartService, private router: Router) {
    this.user = {
      fullname: this.fullname,
      email: this.email,
      creditCard: this.creditCard,
      address: this.address
    }
  }
  ngOnInit(): void {
    this.cartService.getProductItems().subscribe((res) => {
      this.cartItems = res;
    });
  }
  updateCart(newCartItems: ProductItem[]): void {
    this.cartItems = newCartItems;
  }
  getCartTotal(): void {
    this.cartService.getCartTotal().subscribe((res) => {
      this.cartTotal = res;
    });
  }
  onConfirm(): void {
    this.router.navigate(['/confirmation-page']);
  }
}
