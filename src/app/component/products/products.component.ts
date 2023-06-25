import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any;

  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response => {
        this.productList = response
      }),
      error: (error => { console.log(error) })


    })
  }



  // productList: Iproduct[] = [
  //   { ProductName: "Samsung", ProductId: 1, ProductQuantity: 30, ProductPrice: 3000, ProductImg: "assets/img/1.jpg" },
  //   { ProductName: "Samsung", ProductId: 2, ProductQuantity: 300, ProductPrice: 100, ProductImg: "assets/img/10.jpg" },
  //   { ProductName: "Samsung", ProductId: 3, ProductQuantity: 5, ProductPrice: 300, ProductImg: "assets/img/9.jpg" },
  //   { ProductName: "Samsung", ProductId: 4, ProductQuantity: 0, ProductPrice: 7000, ProductImg: "assets/img/6.jpg" }
  // ]



  // delete(i: number) {

  //   this.productList = this.productList.filter((item, index) => index != i);

  // }

}



// ProductName: string;
// ProductId: number;
// ProductQuantity: number;
// ProductPrice: number;
// ProductImg?: string;