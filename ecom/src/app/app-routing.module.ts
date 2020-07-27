import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ApproveVendorComponent } from './approve-vendor/approve-vendor.component';


const routes: Routes = [

  { path: '', component: FooterComponent },
  { path: 'Category', component: CategoryComponent },
  { path: 'SubCategory', component: SubcategoryComponent},
  { path: 'vendoreAppprove', component: ApproveVendorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
