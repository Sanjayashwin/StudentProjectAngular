import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApproveVendorComponent } from './approve-vendor/approve-vendor.component';
import { AdminComponent } from './admin/admin.component';
import { TestComponent } from './test/test.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    SubcategoryComponent,
    ApproveVendorComponent,
    AdminComponent,
    TestComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
