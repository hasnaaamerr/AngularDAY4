import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productId: any;
  product: any;
  constructor(private router: Router, private productService: ProductService, private activatedRooute: ActivatedRoute) {
    this.productId = this.activatedRooute.snapshot.paramMap.get('id');

  }
  ngOnInit(): void {


    if (this.productId != 0) {
      this.productService.getProductById(this.productId).subscribe({
        next: (response) => {
          this.product = response;
          this.GetProductName.setValue(this.product.ProductName);
          this.GetProductPrice.setValue(this.product.ProductPrice);
          this.GetProductQuantity.setValue(this.product.ProductQuantity);
        },
      });
    }
  }
  backToHome() {
    this.router.navigate(['/products'])
  }

  productForm = new FormGroup({
    ProductName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    ProductPrice: new FormControl('', [Validators.required, Validators.min(100)]),
    ProductQuantity: new FormControl('', [Validators.required]),
    ProductImg: new FormControl('')
  }
  )

  get GetProductName() {
    return this.productForm.controls['ProductName']
  }
  get GetProductPrice() {
    return this.productForm.controls['ProductPrice']
  }
  get GetProductQuantity() {
    return this.productForm.controls['ProductQuantity']
  }

  // validData(event: any) {
  //   event.preventDefault()
  //   if (this.productForm.status == 'VALID') {
  //     this.productService.addProduct(this.productForm.value).subscribe({
  //       next: (respons) => {
  //         this.router.navigate(['/products'])
  //       }

  //     })

  //   }

  // }

  formHandler(e: any) {
    e.preventDefault();
    if (this.productForm.status == 'VALID') {
      // add
      if (this.productId == 0) {
        this.productService.addProduct(this.productForm.value).subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
        });
      } else {
        this.productService
          .editProduct(this.productId, this.productForm.value)
          .subscribe({
            next: () => {
              this.router.navigate(['/products']);
            },
          });
      }
    }
  }
}


