import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {  MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    FirstpageComponent,
    SecondpageComponent,
    ThirdpageComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class RegistrationModule { }
