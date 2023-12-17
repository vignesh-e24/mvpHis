import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { HisComponent } from './homescreen/his/his.component';
import { LisComponent } from './homescreen/lis/lis.component';
import { PacsComponent } from './homescreen/pacs/pacs.component';
import { RisComponent } from './homescreen/ris/ris.component';
import { HieComponent } from './homescreen/hie/hie.component';
import { EhrComponent } from './homescreen/ehr/ehr.component';
import { PhmsComponent } from './homescreen/phms/phms.component';
import { ThpComponent } from './homescreen/thp/thp.component';
import { PmsComponent } from './homescreen/pms/pms.component';
import { MatRadioModule } from '@angular/material/radio';
import { HomeComponent } from './homescreen/home/home.component';
import { ForgotPasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { PatientRegistrationComponent } from './patientregistration/patient-registration.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LabpatientComponent } from './labpatient/labpatient.component';
import { EditAddPatientComponent } from './edit-add-patient/edit-add-patient.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DetailModalComponent } from './detail-modal/detail-modal.component';
import { SampleCollectionComponent } from './sample-collection/sample-collection.component';
import { WorklistComponent } from './worklist/worklist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomescreenComponent,
    HisComponent,
    LisComponent,
    PacsComponent,
    RisComponent,
    HieComponent,
    EhrComponent,
    PhmsComponent,
    ThpComponent,
    PmsComponent,
    HomeComponent,
    BillingComponent,
    ForgotPasswordComponent,
    PatientRegistrationComponent,
    LabpatientComponent,
    EditAddPatientComponent,
    AddPatientComponent,
    DetailModalComponent,
    SampleCollectionComponent,
    WorklistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
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
    MatDialogModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent, RegisterComponent]
})
export class AppModule { }
