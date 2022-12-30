import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductItem } from '../models/ProductItem';
@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css'],
})
export class RemoveProductComponent implements OnInit {
  @Input() cartItem: ProductItem;
  constructor(private cartService: CartService) {
    this.cartItem = {
      name: '',
      price: 0,
      quantity: 0,
    };
  }
  ngOnInit(): void {}
  removeProduct() {
    this.cartService.clearProductItem(this.cartItem);
  }
}
