import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { HomeComponent } from './homescreen/home/home.component';
import { BillingComponent } from './billing/billing.component';
import { ForgotPasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { PatientRegistrationComponent } from './patientregistration/patient-registration.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsComponent } from './inventory/products/products.component';
import { SupplierComponent } from './inventory/supplier/supplier.component';
import { ManufacturerComponent } from './inventory/manufacturer/manufacturer.component';
import { ShelfComponent } from './inventory/shelf/shelf.component';
import { ItemLocationComponent } from './inventory/item-location/item-location.component';
import { QuantityComponent } from './inventory/quantity/quantity.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'homescreen',
    component: HomescreenComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'inventory',
        component: InventoryComponent,
        children: [
          { path: 'products', component: ProductsComponent },
          { path: 'supplier', component: SupplierComponent },
          { path: 'manufacturer', component: ManufacturerComponent },
          { path: 'quantity', component: QuantityComponent },
          { path: 'shelf', component: ShelfComponent },
          { path: 'itemLocation', component: ItemLocationComponent },
        ],
      },
    ],
  },

  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'homescreen', component: HomescreenComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'patientregister', component: PatientRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
