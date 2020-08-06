import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
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





const routes: Routes = [


  { path: '', component: LoginComponent },
  { path: 'ADMIN', component: FooterComponent },
  { path: 'Category', component: CategoryComponent },
  { path: 'SubCategory', component: SubcategoryComponent },
  { path: 'vendoreAppprove', component: ApproveVendorComponent },
  { path: 'VENDOR', component: VendorDashboardComponent },
  { path: 'RejectedVendor', component: RejectListComponent },
  { path: 'addDesignPattern', component: AddDesignPatternComponent },
  { path: 'viewdesignPattern', component: AddDesignPatternListComponent },
  { path: 'addMeasurement/:Vid/:Designid', component: AddMeasurementComponent },
  { path: 'orderDetails', component: OrderDetaisComponent },
  { path: 'Catalogmanage', component: ManageCatlogComponent },
  { path: 'chooseMesurement/:Vid/:Designid', component: ChooseMeasureMentComponent },
  { path: 'discountManage', component: DiscountManageComponent },
  { path: 'customerpostOrder', component: CustomerpostOrderComponent },
  { path: 'tailororder', component: TailorOrdersComponent },
  { path: 'vendorRegister', component: VendorregistrationComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
