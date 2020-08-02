import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ApproveVendorComponent } from './approve-vendor/approve-vendor.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TestComponent } from './test/test.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [

  { path: '', component: TestComponent },
  {path:'*/:id', component: AppComponent},
  { path: 'Category', component: CategoryComponent },
  { path: 'SubCategory', component: SubcategoryComponent},
  { path: 'vendoreAppprove', component: ApproveVendorComponent},
  { path: 'role', redirectTo:'/', pathMatch:'full' }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
