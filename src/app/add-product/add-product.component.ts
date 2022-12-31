import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { ProductItem } from '../models/ProductItem';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  @Input() product: Product;
  quantity: number = 0;
  // @Output() addProduct: EventEmitter<ProductItem> = new EventEmitter();
  constructor(private cartService: CartService) {
    this.product = {
      name: '',
      price: 0,
      url: ''
    };
  }
  ngOnInit(): void {}
  submitForm(): void {
    const productItem: ProductItem = {
      name: this.product.name,
      price: this.product.price,
      quantity: this.quantity,
      url: this.product.url
    };
    this.cartService.addProductItem(productItem);

    this.quantity = 0;
    alert('Item added to cart!');
  }
}
