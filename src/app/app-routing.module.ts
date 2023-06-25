import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ContentComponent } from './component/content/content.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { NavParComponent } from './component/nav-par/nav-par.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/:id/edit', component: AddProductComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
