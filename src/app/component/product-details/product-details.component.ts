import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ProductId: any;
  product: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productService: ProductService) {
    this.ProductId = this.activatedRoute.snapshot.paramMap.get('id')

  }
  ngOnInit(): void {
    this.productService.getProductById(this.ProductId).subscribe({
      next: (response) => {
        this.product = response;
      },
      error: (error) => {
        console.log('error');
      },
    });
  }

  backToHome() {
    this.router.navigate(['/products'])
  }
}
