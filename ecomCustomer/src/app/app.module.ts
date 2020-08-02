import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartDetailsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CheckOutComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
