import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public crudData: any = [];
  userdetails: any;
  public crudData1: any = [];
  public crudData2: any = [];
  public crudData3: any = [];
  public crudData4: any = [];
  public crudData5: any = [];
  public crudData6: any = [];
  public crudData7: any = [];
  public crudData8: any = [];

  constructor(private fb: FormBuilder, private service: FirstPharmacyService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.userdetails = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.userdetails.PATIENT_ID, this.userdetails)
    this.allbooks();
    this.allbooks1();
    this.allbooks2();
    this.allbooks3();
    this.allbooks4();
    this.allbooks5();
    this.allbooks6();
    this.allbooks7();
    this.allbooks8();
  }
  // showData(){
  //   this.service.userItems().subscribe((res: any) => {
  //     console.log(res)
  //     this.crudData = res.users;
  //   })
  // }
  allbooks() {
    const obj1 = { PATIENT_ID: this.userdetails.PATIENT_ID }
    this.service.allbookings(obj1).subscribe((res: any) => {
      console.log(res)
      this.crudData = res.MAB_BOOKING;
    })
  }
  allbooks1() {
    const obj1 = { PATIENT_ID: this.userdetails.PATIENT_ID }
    this.service.allbookings1(obj1).subscribe((res: any) => {
      console.log(res)
      this.crudData1 = res.DOCTOR_BOOKING;
    })
  }
  allbooks2() {
    const obj1 = { PATIENT_ID: this.userdetails.PATIENT_ID }
    this.service.allbookings2(obj1).subscribe((res: any) => {
      console.log(res)
      this.crudData2 = res.PWC_BOOKING;
    })
  }
  allbooks3() {
    const obj1 = { PATIENT_ID: this.userdetails.PATIENT_ID }
    this.service.allbookings3(obj1).subscribe((res: any) => {
      console.log(res)
      this.crudData3 = res.BSA_BOOKING;
    })
  }
  allbooks4() {
    const obj1 = { PATIENT_ID: this.userdetails.PATIENT_ID }
    this.service.allbookings4(obj1).subscribe((res: any) => {
      console.log(res)
      this.crudData4 = res.BP_BOOKING;
    })
  }
  allbooks5() {
    const obj1 = { PATIENT_ID: this.userdetails.PATIENT_ID }
    this.service.allbookings5(obj1).subscribe((res: any) => {
      console.log(res)
      this.crudData5 = res.AMB_BOOKING;
    })
  }
  allbooks6() {
    const obj1 = { PATIENT_ID: this.userdetails.PATIENT_ID }
    this.service.allbookings6(obj1).subscribe((res: any) => {
      console.log(res)
      this.crudData6 = res.NURSE_BOOKING;
    })
  }
  allbooks7() {
    const obj1 = { PATIENT_ID: this.userdetails.PATIENT_ID }
    this.service.allbookings7(obj1).subscribe((res: any) => {
      console.log(res)
      this.crudData7 = res.REH_BOOKING;
    })
  }
  allbooks8() {
    const obj1 = { PATIENT_ID: this.userdetails.PATIENT_ID }
    this.service.allbookings8(obj1).subscribe((res: any) => {
      console.log(res)
      this.crudData8 = res.PHYSIO_BOOKING;
    })
  }
}
