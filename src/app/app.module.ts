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
import { BillingComponent } from './billing/billing.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { TestMasterComponent } from './test-master/test-master.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTreeModule } from '@angular/material/tree';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { HomeComponent } from './homescreen/home/home.component';
import { ForgotPasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { PatientRegistrationComponent } from './patientregistration/patient-registration.component';
import { LabpatientComponent } from './labpatient/labpatient.component';
import { EditAddPatientComponent } from './edit-add-patient/edit-add-patient.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DetailModalComponent } from './detail-modal/detail-modal.component';
import { SampleCollectionComponent } from './sample-collection/sample-collection.component';
import { WorklistComponent } from './worklist/worklist.component';
import { HttpClientModule } from '@angular/common/http';
import { TestDailogComponent } from './test-master/test-dailog/test-dailog.component';
import { UnitTestComponent } from './test-master/unit-test/unit-test.component';
import { AddComponent } from './test-master/unit-test/add/add.component';
import { SampleTestComponent } from './test-master/sample-test/sample-test.component';
import { AddComponentComponent } from './test-master/sample-test/add-component/add-component.component';
import { DepartmentTestComponent } from './test-master/department-test/department-test.component';
import { MethodTestComponent } from './test-master/method-test/method-test.component';
import { ContainerTestComponent } from './test-master/container-test/container-test.component';
import { AddContainerComponent } from './test-master/container-test/add-container/add-container.component';
import { AddDepartmentComponent } from './test-master/department-test/add-department/add-department.component';
import { AddMethodComponent } from './test-master/method-test/add-method/add-method.component';
import { RefDialogComponent } from './test-master/ref-dialog/ref-dialog.component';
import { ResultTypeComponent } from './test-master/result-type/result-type.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsComponent } from './inventory/products/products.component';
import { SupplierComponent } from './inventory/supplier/supplier.component';
import { ManufacturerComponent } from './inventory/manufacturer/manufacturer.component';
import { QuantityComponent } from './inventory/quantity/quantity.component';
import { ShelfComponent } from './inventory/shelf/shelf.component';
import { ItemLocationComponent } from './inventory/item-location/item-location.component';
import { DetailsPopupComponent } from './inventory/details-popup/details-popup.component';
import { DoctorDeskComponent } from './doctor-desk/doctor-desk.component';

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
    LabpatientComponent,
    EditAddPatientComponent,
    AddPatientComponent,
    DetailModalComponent,
    SampleCollectionComponent,
    WorklistComponent,
    TestMasterComponent,
    TestDailogComponent,
    UnitTestComponent,
    AddComponent,
    SampleTestComponent,
    AddComponentComponent,
    DepartmentTestComponent,
    MethodTestComponent,
    ContainerTestComponent,
    AddContainerComponent,
    AddDepartmentComponent,
    AddMethodComponent,
    RefDialogComponent,
    ResultTypeComponent,  
    InventoryComponent,
    ProductsComponent,
    SupplierComponent,
    ManufacturerComponent,
    QuantityComponent,
    ShelfComponent,
    ItemLocationComponent,
    DetailsPopupComponent,
    DoctorDeskComponent
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
    MatPaginatorModule,
    MatTreeModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDialogModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
