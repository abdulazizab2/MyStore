export class Product {
  id?: number;
  name: string;
  price: number;
  url?: string;
  description?: string

  constructor() {
    this.name = '';
    this.price = 0;
  }
}