import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})
export class AmbulanceComponent implements OnInit {
  amb1: any;
  amb2: any;
  emergency: any;
  Bludgrp1: any;
  Bludgrp2: any;
  amb3: boolean = true;
  amb4: boolean = false;
  queryParams: any;
  userdetails: any;
  user: any;
  

  constructor(private fb:FormBuilder,private router:Router,private service:FirstPharmacyService,private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    // this.getBloodgroup1();
    // this.getBloodgroup2();
    this.userdetails = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.userdetails.PATIENT_ID,this.userdetails)
    this.allUsers();
    this.sitnames();
  }
  allUsers() {
    const obj = {  PATIENT_ID: this.userdetails.PATIENT_ID }
    this.service.usernames(obj).subscribe((res:any) => {
      console.log(res)
      this.user=res
    })
  }
  sitnames() {
    this.service.situationnames().subscribe((res:any) => {
      console.log(res)
      // this.amb1 = res[0]
      // console.log(this.amb1)
      // this.amb2 = res[1]
      // console.log(this.amb2)
      this.amb2=res
    })
  }
  // getBloodgroup1() {
  //   this.service.situationnames1().subscribe(res => {
  //     console.log(res)
  //     this.Bludgrp1 = res
  //   })
  // }
  // getBloodgroup2() {
  //   this.service.situationnames2().subscribe(res => {
  //     console.log(res)
  //     this.Bludgrp2 = res
  //   })
  // }

  // openamb1(){
  //   this.amb3 = false;
  //   this.amb4 = true;
  //   this.router.navigate(['ambulance'], {queryParams:{emergency:'EMERGENCY'}})
  // }
  // openamb2(){
  //   this.amb3 = false;
  //   this.amb4 = true;
  //   this.router.navigate(['ambulance'], {queryParams:{nonemergency:'NON-EMERGENCY'}})
  // }
  // typename(BASIC_TYPE_ID:any){
  //   this.router.navigate(['amb2'], {queryParams:{name:BASIC_TYPE_ID}})
  // }
  // typename1(ADVANCED_TYPE_ID:any){
  //   this.router.navigate(['amb2'], {queryParams:{name1:ADVANCED_TYPE_ID}})
  // }
  situname(SITUATION_ID:any){
    this.router.navigate(['amb1'], {queryParams:{situname1:SITUATION_ID}})
  }
}
