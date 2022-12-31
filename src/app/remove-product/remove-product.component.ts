import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductItem } from '../models/ProductItem';
@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css'],
})
export class RemoveProductComponent implements OnInit {
  @Input() cartItem: ProductItem;
  @Output() onItemRemoved: EventEmitter<ProductItem[]> = new EventEmitter();
  constructor(private cartService: CartService) {
    this.cartItem = {
      id: 0,
      name: '',
      price: 0,
      quantity: 0,
    };
  }
  ngOnInit(): void {}
  removeItem(): void {
    const newCartItems = this.cartService.clearProductItem(this.cartItem)
    this.onItemRemoved.emit(newCartItems)
  } 
}
