import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { Ambulance1Component } from './ambulance/ambulance1/ambulance1.component';
import { Ambulance2Component } from './ambulance/ambulance2/ambulance2.component';
import { BedsideOnetimeComponent } from './bedsideattendent/bedside-onetime/bedside-onetime.component';
import { BedsideSubscribeComponent } from './bedsideattendent/bedside-subscribe/bedside-subscribe.component';
import { BedsideattendentComponent } from './bedsideattendent/bedsideattendent.component';
import { BloodComponent } from './bloodbank/blood/blood.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { DonorComponent } from './bloodbank/donor/donor.component';
import { BookingComponent } from './booking/booking.component';
import { BpmonitoringComponent } from './bpmonitoring/bpmonitoring.component';
import { BponetimeComponent } from './bpmonitoring/bponetime/bponetime.component';
import { BpsubscribeComponent } from './bpmonitoring/bpsubscribe/bpsubscribe.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorbookComponent } from './doctor/doctorbook/doctorbook.component';
import { DoctorlistComponent } from './doctor/doctorlist/doctorlist.component';
import { FamilymembersComponent } from './familymembers/familymembers.component';
import { FirstComponent } from './first/first.component';
import { HometwoComponent } from './hometwo/hometwo.component';
import { LoginComponent } from './login/login.component';
import { BabycareComponent } from './motherandbaby/babycare/babycare.component';
import { BabycarebookComponent } from './motherandbaby/babycare/babycarebook/babycarebook.component';
import { BabyneoComponent } from './motherandbaby/babyneo/babyneo.component';
import { BabyneobookComponent } from './motherandbaby/babyneo/babyneobook/babyneobook.component';
import { BabysitComponent } from './motherandbaby/babysit/babysit.component';
import { BabysitbookComponent } from './motherandbaby/babysit/babysitbook/babysitbook.component';
import { BrestfeedingComponent } from './motherandbaby/brestfeeding/brestfeeding.component';
import { BrestfeedingbookComponent } from './motherandbaby/brestfeeding/brestfeedingbook/brestfeedingbook.component';
import { GynecologyComponent } from './motherandbaby/gynecology/gynecology.component';
import { GynecologybookComponent } from './motherandbaby/gynecology/gynecologybook/gynecologybook.component';
import { LactationComponent } from './motherandbaby/lactation/lactation.component';
import { LactationbookComponent } from './motherandbaby/lactation/lactationbook/lactationbook.component';
import { MotherandbabyComponent } from './motherandbaby/motherandbaby.component';
import { NutditComponent } from './motherandbaby/nutdit/nutdit.component';
import { NutditbookComponent } from './motherandbaby/nutdit/nutditbook/nutditbook.component';
import { RadiologyComponent } from './motherandbaby/radiology/radiology.component';
import { RadiologybookComponent } from './motherandbaby/radiology/radiologybook/radiologybook.component';
import { NuroneComponent } from './nursing/nurone/nurone.component';
import { NursingComponent } from './nursing/nursing.component';
import { NursubComponent } from './nursing/nursub/nursub.component';
import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';
import { PregnancyComponent } from './pregnancy/pregnancy.component';
import { PregnancybookComponent } from './pregnancy/pregnancybook/pregnancybook.component';
import { PregnancylistComponent } from './pregnancy/pregnancylist/pregnancylist.component';
import { RehabilitationComponent } from './rehabilitation/rehabilitation.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'bedside',component: BedsideattendentComponent},
  {path:'bso',component:BedsideOnetimeComponent},
  {path:'bss',component:BedsideSubscribeComponent},
  {path:'bp',component:BpmonitoringComponent},
  {path:'bpone',component:BponetimeComponent},
  {path:'bpsub',component:BpsubscribeComponent},
  {path:'nur',component:NursingComponent},
  {path:'nurone',component:NuroneComponent},
  {path:'nursub',component:NursubComponent},
  {path:'m&b',component:MotherandbabyComponent},
  {path:'m&b/babysit',component:BabysitComponent},
  {path:'m&b/babycare',component:BabycareComponent},
  {path:'m&b/babyneo',component:BabyneoComponent},
  {path:'m&b/lact',component:LactationComponent},
  {path:'m&b/radi',component:RadiologyComponent},
  {path:'m&b/bfs',component:BrestfeedingComponent},
  {path:'m&b/nutdiet',component:NutditComponent},
  {path:'m&b/gyn',component:GynecologyComponent},
  {path:'doc',component:DoctorComponent},
  {path:'doc/list',component:DoctorlistComponent},
  {path:'doc/book',component:DoctorbookComponent},
  {path:'rehab',component:RehabilitationComponent},
  {path:'m&b/babysit/book',component:BabysitbookComponent},
  {path:'m&b/babycare/book',component:BabycarebookComponent},
  {path:'m&b/babyneo/book',component:BabyneobookComponent},
  {path:'m&b/lact/book',component:LactationbookComponent},
  {path:'m&b/radi/book',component:RadiologybookComponent},
  {path:'m&b/bfs/book',component:BrestfeedingbookComponent},
  {path:'m&b/nutdiet/book',component:NutditbookComponent},
  {path:'m&b/gyn/book',component:GynecologybookComponent}, 
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'main',component:FirstComponent},
  {path:'bookings',component:BookingComponent},


  {path:'bloodbank',component:BloodbankComponent},
  {path:'receiver',component:BloodComponent},
  {path:'donor',component:DonorComponent},
  {path:'ambulance',component:AmbulanceComponent},
  {path:'amb2',component:Ambulance2Component},
  {path:'amb1',component:Ambulance1Component},
  {path:'physio',component:PhysiotherapyComponent},
  {path:'home2',component:HometwoComponent},


  
  { path: 'preg', component: PregnancyComponent },
  { path: 'preg/list', component: PregnancylistComponent },
  { path: 'preg/book', component: PregnancybookComponent },
  { path: 'familymem', component: FamilymembersComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstpharmacyRoutingModule { }
