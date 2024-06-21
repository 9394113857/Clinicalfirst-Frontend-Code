import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-ambulance1',
  templateUrl: './ambulance1.component.html',
  styleUrls: ['./ambulance1.component.css']
})
export class Ambulance1Component implements OnInit {
  Bludgrp1: any;
  Bludgrp2: any;
  basicnames2: any;
  typeDetails2: any;
  userdetails: any;
  user: any;

  constructor(private fb:FormBuilder,private router:Router,private service:FirstPharmacyService,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['situname1']) {
        this.basicnames2 = params['situname1']
        this.displayitems2(params['situname1'])
      }
      (console.log(params, 'ppp3'))
    })
   }

  ngOnInit(): void {
    this.getBloodgroup1();
    this.getBloodgroup2();
    this.userdetails = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.userdetails.PATIENT_ID,this.userdetails)
    this.allUsers();
  }
  allUsers() {
    const obj = {  PATIENT_ID: this.userdetails.PATIENT_ID }
    this.service.usernames(obj).subscribe((res:any) => {
      console.log(res)
      this.user=res
    })
  }
  displayitems2(situname1: any) {
    this.service.getItemDetail3({ SITUATION_ID: situname1 }).subscribe(res => {
      console.log(res)
      this.typeDetails2 = res
    })
  }
  getBloodgroup1() {
    this.service.situationnames1().subscribe(res => {
      console.log(res)
      this.Bludgrp1 = res
    })
  }
  getBloodgroup2() {
    this.service.situationnames2().subscribe(res => {
      console.log(res)
      this.Bludgrp2 = res
    })
  }
  typename(BASIC_TYPE_ID:any){
    this.router.navigate(['amb2'], {queryParams:{name:BASIC_TYPE_ID,emergencyid:this.basicnames2}}
    )
  }
  typename1(ADVANCED_TYPE_ID:any){
    this.router.navigate(['amb2'], {queryParams:{name1:ADVANCED_TYPE_ID,emergencyid:this.basicnames2}})
  }
}
