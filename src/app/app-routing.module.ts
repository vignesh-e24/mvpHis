import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { HomeComponent } from './homescreen/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'homescreen',
    component: HomescreenComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'HIS', component: HisComponent},
      {path: 'LIS', component: LisComponent},
      {path: 'PACS', component: PacsComponent},
      {path: 'RIS', component: RisComponent},
      {path: 'HIE', component: HieComponent},
      {path: 'EHR', component: EhrComponent},
      {path: 'PHMS', component: PhmsComponent},
      {path: 'THP', component: ThpComponent},
      {path: 'PMS', component: PmsComponent},
    ]
},
  { path: 'login', component: LoginComponent },
  { path: 'homescreen', component: HomescreenComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
