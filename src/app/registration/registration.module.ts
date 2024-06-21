import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';



@NgModule({
  declarations: [
    FirstpageComponent,
    SecondpageComponent,
    ThirdpageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegistrationModule { }
