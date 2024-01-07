import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTreeModule } from '@angular/material/tree';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './homescreen/home/home.component';
import { ForgotPasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { PatientRegistrationComponent } from './patientregistration/patient-registration.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { BillingComponent } from './billing/billing.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsComponent } from './inventory/products/products.component';
import { SupplierComponent } from './inventory/supplier/supplier.component';
import { ManufacturerComponent } from './inventory/manufacturer/manufacturer.component';
import { QuantityComponent } from './inventory/quantity/quantity.component';
import { ShelfComponent } from './inventory/shelf/shelf.component';
import { ItemLocationComponent } from './inventory/item-location/item-location.component';
import { DetailsPopupComponent } from './inventory/details-popup/details-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomescreenComponent,
    HomeComponent,
    BillingComponent,
    ForgotPasswordComponent,
    PatientRegistrationComponent,
    InventoryComponent,
    ProductsComponent,
    SupplierComponent,
    ManufacturerComponent,
    QuantityComponent,
    ShelfComponent,
    ItemLocationComponent,
    DetailsPopupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule ,
    MatIconModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatListModule,
    AppRoutingModule,
    MatRadioModule,
    MatSelectModule,
    MatGridListModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatTreeModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDialogModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
