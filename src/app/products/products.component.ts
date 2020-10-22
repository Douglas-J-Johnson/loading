import { Component, Input } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() products = [];
  @Input() loadedProducts = [];

  public productsColumns = [
    'name',
    'location'
  ];
  public loadedProductsColumns = [
    'name',
    'weighed',
    'weight'
  ];

  public loadedProductsCount(): number {
    return this.loadedProducts.length;
  }
}
