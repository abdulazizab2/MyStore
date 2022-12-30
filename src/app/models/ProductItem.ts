import { Product } from './Product';

export class ProductItem extends Product {
  quantity: number;
  constructor() {
    super();
    this.quantity = 1;
  }
}
