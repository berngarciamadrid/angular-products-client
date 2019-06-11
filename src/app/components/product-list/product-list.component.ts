import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getProducts()
    .subscribe(
      res => {
        console.log(res);
        this.products = res;
        console.log(this.products);
        console.log(typeof this.products);
      },
      err => console.log(err)
    );
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
    .subscribe(
      res => {
        this.getAllProducts();
      },
      err => console.log(err)
    );

  }

}
