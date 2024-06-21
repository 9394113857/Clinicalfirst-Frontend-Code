
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {
  oppDetailForm: FormGroup;
  Bludgrp: any;
  storage: any;

  constructor(private service:FirstPharmacyService,private router:Router,private fb:FormBuilder) {
    this.oppDetailForm = this.fb.group({
      PATIENT_ID : ['', Validators.required],
      BLOOD_GROUP: ['', Validators.required],
    })
   }

  ngOnInit(): void {
    this.getBloodgroup()
  }
  getBloodgroup() {
    this.service.getbludgrp().subscribe(res => {
      console.log(res)
      this.Bludgrp = res
    })
  }
  book(){
    console.log(this.oppDetailForm.value)
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.storage)
    const obj = { ...this.oppDetailForm.value, PATIENT_ID: this.storage.PATIENT_ID }
    this.service.Blooddonor(obj).subscribe(res =>{
      console.log(res)
    })
    
    window.alert('Your Appointment has been Booked!');
    this.router.navigate(['/main'])
  }
}
