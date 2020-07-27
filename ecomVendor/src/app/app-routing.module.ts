import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDesignPatternComponent } from './add-design-pattern/add-design-pattern.component';
import { AddDesignPatternListComponent } from './add-design-pattern-list/add-design-pattern-list.component';
import { AddMeasurementComponent } from './add-measurement/add-measurement.component';
import { OrderDetaisComponent } from './order-detais/order-detais.component';
import { ManageCatlogComponent } from './manage-catlog/manage-catlog.component';
import { ChooseMeasureMentComponent } from './choose-measure-ment/choose-measure-ment.component';
import { DiscountManageComponent } from './discount-manage/discount-manage.component';
import { CustomerpostOrderComponent } from './customerpost-order/customerpost-order.component';
import { TailorOrdersComponent } from './tailor-orders/tailor-orders.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';


const routes: Routes = [
  { path: '', component: VendorDashboardComponent },
  { path: 'addDesignPattern', component: AddDesignPatternComponent },
  { path: 'viewdesignPattern', component:AddDesignPatternListComponent  },
  { path: 'addMeasurement', component:AddMeasurementComponent },
  { path: 'orderDetails', component: OrderDetaisComponent},
  { path: 'Catalogmanage', component:  ManageCatlogComponent},
  { path: 'chooseMesurement', component:  ChooseMeasureMentComponent},
  { path: 'discountManage', component: DiscountManageComponent},
  { path: 'customerpostOrder', component: CustomerpostOrderComponent},
  { path: 'tailororder', component: TailorOrdersComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
