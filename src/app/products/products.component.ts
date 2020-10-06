import { Component } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public listProducts(): void {
    console.log('List Products');
  }

  public displayProductsMap(): void {
    console.log('Display Products Map');
  }
}