import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';

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
    MatRadioModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
