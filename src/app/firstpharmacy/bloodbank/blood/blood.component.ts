import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-blood',
  templateUrl: './blood.component.html',
  styleUrls: ['./blood.component.css']
})
export class BloodComponent implements OnInit {
  Bludgrp: any;
  oppDetailForm: FormGroup;
  Bludgrp1: any;
  Bludgrp2: any;
  myData: any;
  storage: any;

  constructor(private service:FirstPharmacyService,private router:Router,private fb:FormBuilder) { 
    this.oppDetailForm = this.fb.group({
      PATIENT_ID : ['', Validators.required],
      BLOOD_GROUP: ['', Validators.required],
      CMP_NAME: ['', Validators.required],
      DISPATCH_NAME: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.getBloodgroup()
    this.getBloodgroup1()
  }
  getBloodgroup() {
    this.service.getbludgrp().subscribe(res => {
      console.log(res)
      this.Bludgrp = res
    })
  }
  getBloodgroup1() {
    this.service.getbludgrp1().subscribe(res => {
      console.log(res)
      this.Bludgrp1 = res
    })
  }
  getDispatch() {
    this.service.getdispatch().subscribe(res => {
      // this.myData = res.map(obj => obj.name);
      console.log(res)
      this.Bludgrp2 = res
    })
  }
  book(){
    console.log(this.oppDetailForm.value)
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.storage)
    const obj = { ...this.oppDetailForm.value, PATIENT_ID: this.storage.PATIENT_ID }
    this.service.BloodItems(obj).subscribe(res =>{
      console.log(res)
    })
    
    window.alert('Your Appointment has been Booked!');
    this.router.navigate(['/main'])
  }
}

