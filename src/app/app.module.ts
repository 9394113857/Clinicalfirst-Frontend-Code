import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule

import { AuthService } from './services/auth.service';
import { FirstPharmacyService } from './services/first-pharmacy.service';

@NgModule({
  declarations: [
    AppComponent,
    // Add other components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule, // Import FormsModule if you need template-driven forms
    ReactiveFormsModule, // Import ReactiveFormsModule for reactive forms
  ],
  providers: [
    AuthService,
    FirstPharmacyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
