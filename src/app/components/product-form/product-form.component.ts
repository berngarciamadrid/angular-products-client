import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
  };

  edit: boolean = false;

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

   }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.productService.getProduct(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.product = res;
          this.edit = true;
        }
      );
    }
  }

  submitProduct() {
    console.log(this.product);
    this.productService.createProduct(this.product)
    .subscribe(
      respuesta => {
        console.log(respuesta);
        this.router.navigate(['/']);
      },
      error => console.log(error)
    );
  }

  updateProduct() {
    delete this.product.createdAt;
    this.productService.updateProduct(this.product._id, this.product)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/product']);
      },
      err => console.log(err)
    );
  }

}
