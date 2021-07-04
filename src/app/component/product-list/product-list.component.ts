import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-table.component.html',
 // templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 products: Product[];
  tempProduct: any;
  constructor(private productService: ProductService) { }
  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.listProducts();
  }
  // tslint:disable-next-line:typedef
  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    );
  }
}

