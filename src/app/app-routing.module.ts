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
import { DoctorDeskComponent } from './doctor-desk/doctor-desk.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'homescreen',
    component: HomescreenComponent,
    children: [
      { path: 'home', component: HomeComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'homescreen', component: HomescreenComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'patientregister', component: PatientRegistrationComponent },
  { path: 'testMaster', component: TestMasterComponent },
  { path: 'doctorDesk', component: DoctorDeskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
