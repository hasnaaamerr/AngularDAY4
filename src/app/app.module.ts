import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { LoginComponent } from './component/login/login.component';
import { NavParComponent } from './component/nav-par/nav-par.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContentComponent } from './component/content/content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    LoginComponent,
    NavParComponent,
    NotFoundPageComponent,
    AddProductComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
