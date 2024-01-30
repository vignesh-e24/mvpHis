import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { HomeComponent } from './homescreen/home/home.component';
import { BillingComponent } from './billing/billing.component';
import { ForgotPasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { PatientRegistrationComponent } from './patientregistration/patient-registration.component';
import { TestMasterComponent } from './test-master/test-master.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsComponent } from './inventory/products/products.component';
import { SupplierComponent } from './inventory/supplier/supplier.component';
import { ManufacturerComponent } from './inventory/manufacturer/manufacturer.component';
import { ShelfComponent } from './inventory/shelf/shelf.component';
import { ItemLocationComponent } from './inventory/itemLocation/itemLocation.component';
import { QuantityComponent } from './inventory/quantity/quantity.component';
import { LabpatientComponent } from './labpatient/labpatient.component';
import { EditAddPatientComponent } from './edit-add-patient/edit-add-patient.component';
import { DoctorDeskComponent } from './doctor-desk/doctor-desk.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DetailModalComponent } from './detail-modal/detail-modal.component';
import { SampleCollectionComponent } from './sample-collection/sample-collection.component';
import { WorklistComponent } from './worklist/worklist.component';

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
        path: 'home', component: HomeComponent,
      },

      {
        path: 'registration-billing',
        children: [{ path: 'register-patient', component: BillingComponent }],
      },

      {
        path: 'vitals',
        children: [
          { path: 'patient-information', component: LabpatientComponent },
          { path: 'patient-register', component: PatientRegistrationComponent },
          { path: 'doctors-desk', component: DoctorDeskComponent },
        ],
      },

      {
        path: 'test-master',
        children:[ { path: 'lab-master', component: TestMasterComponent }],  
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


  // Routing paths
  { path: 'login', component: LoginComponent },
  { path: 'addPatient', component: AddPatientComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'detailModal', component: DetailModalComponent },
  { path: 'doctorDesk', component: DoctorDeskComponent },
  { path: 'editAddPatient', component: EditAddPatientComponent },
  { path: 'homescreen', component: HomescreenComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'patientregister', component: PatientRegistrationComponent },
  { path: 'labpatient', component: LabpatientComponent },
  { path: 'editaddpatient', component: EditAddPatientComponent },
  { path: 'testMaster', component: TestMasterComponent },
  { path: 'sampleCollection', component: SampleCollectionComponent },
  { path: 'worklist', component: WorklistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
