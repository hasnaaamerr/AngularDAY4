import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productId: any;
  productList: any;

  constructor(private productService: ProductService, private activateRoute: ActivatedRoute) {
    this.productId = this.activateRoute.snapshot.paramMap.get("id");

  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.productList = response
      },
      error: (error) => { console.log(error) }


    })
  }

  delete(id:number) {
    let con = confirm("Are you sure to delete ?");
    if(con){
      return this.productService.deleteProduct(id).subscribe({
        next: () => {
          console.log("product is removed")
          this.productList =  this.productList.filter((p:any) => p.id !== id);
        }
      })
    }
    return;
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