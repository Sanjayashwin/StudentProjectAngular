import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApproveVendorComponent } from './approve-vendor/approve-vendor.component';
import { AddDesignPatternComponent } from './add-design-pattern/add-design-pattern.component';
import { AddDesignPatternListComponent } from './add-design-pattern-list/add-design-pattern-list.component';
import { AddMeasurementComponent } from './add-measurement/add-measurement.component';
import { ChooseMeasureMentComponent } from './choose-measure-ment/choose-measure-ment.component';
import { ManageCatlogComponent } from './manage-catlog/manage-catlog.component';
import { DiscountManageComponent } from './discount-manage/discount-manage.component';
import { TailorOrdersComponent } from './tailor-orders/tailor-orders.component';
import { OrderDetaisComponent } from './order-detais/order-detais.component';
import { CustomerpostOrderComponent } from './customerpost-order/customerpost-order.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorregistrationComponent } from './vendorregistration/vendorregistration.component';
import { RejectListComponent } from './reject-list/reject-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    CategoryComponent,
    SubcategoryComponent,
    ApproveVendorComponent,
    AddDesignPatternComponent,
    AddDesignPatternListComponent,
    AddMeasurementComponent,
    ChooseMeasureMentComponent,
    ManageCatlogComponent,
    DiscountManageComponent,
    TailorOrdersComponent,
    OrderDetaisComponent,
    CustomerpostOrderComponent,
    VendorDashboardComponent,
    VendorregistrationComponent,
    RejectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
