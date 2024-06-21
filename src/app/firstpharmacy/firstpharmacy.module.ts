import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstpharmacyRoutingModule } from './firstpharmacy-routing/firstpharmacy-routing.module';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { BedsideattendentComponent } from './bedsideattendent/bedsideattendent.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { BookingComponent } from './booking/booking.component';
import { BpmonitoringComponent } from './bpmonitoring/bpmonitoring.component';
import { DoctorComponent } from './doctor/doctor.component';
import { FamilymembersComponent } from './familymembers/familymembers.component';
import { FirstComponent } from './first/first.component';
import { HometwoComponent } from './hometwo/hometwo.component';
import { LoginComponent } from './login/login.component';
import { MotherandbabyComponent } from './motherandbaby/motherandbaby.component';
import { NursingComponent } from './nursing/nursing.component';
import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';
import { PregnancyComponent } from './pregnancy/pregnancy.component';
import { RehabilitationComponent } from './rehabilitation/rehabilitation.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AmbulanceComponent,
    BedsideattendentComponent,
    BloodbankComponent,
    BookingComponent,
    BpmonitoringComponent,
    DoctorComponent,
    FamilymembersComponent,
    FirstComponent,
    HometwoComponent,
    LoginComponent,
    MotherandbabyComponent,
    NursingComponent,
    PhysiotherapyComponent,
    PregnancyComponent,
    RehabilitationComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FirstpharmacyRoutingModule
  ]
})
export class FirstpharmacyModule { }
