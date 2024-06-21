import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstpharmacyRoutingModule } from './firstpharmacy-routing.module';
import { SidebarsModule } from '../sidebars/sidebars.module';
import { BedsideattendentComponent } from './bedsideattendent/bedsideattendent.component';
import { BedsideOnetimeComponent } from './bedsideattendent/bedside-onetime/bedside-onetime.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BedsideSubscribeComponent } from './bedsideattendent/bedside-subscribe/bedside-subscribe.component';
import { LoginComponent } from './login/login.component';
import { BpmonitoringComponent } from './bpmonitoring/bpmonitoring.component';
import { BponetimeComponent } from './bpmonitoring/bponetime/bponetime.component';
import { BpsubscribeComponent } from './bpmonitoring/bpsubscribe/bpsubscribe.component';
import { NursingComponent } from './nursing/nursing.component';
import { NuroneComponent } from './nursing/nurone/nurone.component';
import { NursubComponent } from './nursing/nursub/nursub.component';
import { MotherandbabyComponent } from './motherandbaby/motherandbaby.component';
import { BabysitComponent } from './motherandbaby/babysit/babysit.component';
import { BabysitbookComponent } from './motherandbaby/babysit/babysitbook/babysitbook.component';
import { BabycareComponent } from './motherandbaby/babycare/babycare.component';
import { BabycarebookComponent } from './motherandbaby/babycare/babycarebook/babycarebook.component';
import { BabyneoComponent } from './motherandbaby/babyneo/babyneo.component';
import { BabyneobookComponent } from './motherandbaby/babyneo/babyneobook/babyneobook.component';
import { LactationComponent } from './motherandbaby/lactation/lactation.component';
import { LactationbookComponent } from './motherandbaby/lactation/lactationbook/lactationbook.component';
import { RadiologyComponent } from './motherandbaby/radiology/radiology.component';
import { RadiologybookComponent } from './motherandbaby/radiology/radiologybook/radiologybook.component';
import { BrestfeedingComponent } from './motherandbaby/brestfeeding/brestfeeding.component';
import { BrestfeedingbookComponent } from './motherandbaby/brestfeeding/brestfeedingbook/brestfeedingbook.component';
import { NutditComponent } from './motherandbaby/nutdit/nutdit.component';
import { GynecologyComponent } from './motherandbaby/gynecology/gynecology.component';
import { GynecologybookComponent } from './motherandbaby/gynecology/gynecologybook/gynecologybook.component';
import { NutditbookComponent } from './motherandbaby/nutdit/nutditbook/nutditbook.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorlistComponent } from './doctor/doctorlist/doctorlist.component';
import { DoctorbookComponent } from './doctor/doctorbook/doctorbook.component';
import { PregnancyComponent } from './pregnancy/pregnancy.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RehabilitationComponent } from './rehabilitation/rehabilitation.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { BloodComponent } from './bloodbank/blood/blood.component';
import { DonorComponent } from './bloodbank/donor/donor.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { Ambulance2Component } from './ambulance/ambulance2/ambulance2.component';
import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';
import { BookingComponent } from './booking/booking.component';
import { PregnancylistComponent } from './pregnancy/pregnancylist/pregnancylist.component';
import { SignupComponent } from './signup/signup.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { Ambulance1Component } from './ambulance/ambulance1/ambulance1.component';
import { PregnancybookComponent } from './pregnancy/pregnancybook/pregnancybook.component';
import { AuthService } from '../services/auth.service';
import { FirstPharmacyService } from '../services/first-pharmacy.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorMsgService } from '../services/error-msg.service';
import { Overlay } from '@angular/cdk/overlay';
import { FamilymembersComponent } from './familymembers/familymembers.component';
import { FirstComponent } from './first/first.component';
import { HometwoComponent } from './hometwo/hometwo.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    BedsideattendentComponent,
    BedsideOnetimeComponent,
    BedsideSubscribeComponent,
    LoginComponent,
    BpmonitoringComponent,
    BponetimeComponent,
    BpsubscribeComponent,
    NursingComponent,
    NuroneComponent,
    NursubComponent,
    MotherandbabyComponent,
    BabysitComponent,
    BabysitbookComponent,
    BabycareComponent,
    BabycarebookComponent,
    BabyneoComponent,
    BabyneobookComponent,
    LactationComponent,
    LactationbookComponent,
    RadiologyComponent,
    RadiologybookComponent,
    BrestfeedingComponent,
    BrestfeedingbookComponent,
    NutditComponent,
    GynecologyComponent,
    GynecologybookComponent,
    NutditbookComponent,
    DoctorComponent,
    DoctorlistComponent,
    DoctorbookComponent,
    PregnancyComponent,
    RehabilitationComponent,
    BloodbankComponent,
    BloodComponent,
    DonorComponent,
    AmbulanceComponent,
    Ambulance2Component,
    PhysiotherapyComponent,
    BookingComponent,
    PregnancylistComponent,
    PregnancybookComponent,
    SignupComponent,
    Ambulance1Component,
    FamilymembersComponent,
    FirstComponent,
    HometwoComponent,
  ],
  imports: [
    CommonModule,
    FirstpharmacyRoutingModule,
    SidebarsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
  ],
  providers: [
    AuthService,
    FirstPharmacyService,
    MatSnackBar,
    ErrorMsgService,
    Overlay,
    HomeModule
  ],
})
export class FirstpharmacyModule { }
