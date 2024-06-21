import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-bpsubscribe',
  templateUrl: './bpsubscribe.component.html',
  styleUrls: ['./bpsubscribe.component.css']
})
export class BpsubscribeComponent implements OnInit {
  necDetail: any;
  bpsubForm: FormGroup;
  storage: any;

  constructor(
    private fb: FormBuilder,
    private service: FirstPharmacyService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.bpsubForm = this.fb.group({
      PATIENT_ID: ['', Validators.required],
      NEC_ID: ['', Validators.required],
      BOOKING_DATE: ['', Validators.required],
      HOUSE_NO: ['', Validators.required],
      FLOOR_NO: ['', Validators.required],
      LOCALITY: ['', Validators.required],
      CITY: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getlist();
  }

  getlist(): void {
    this.service['getItem1']().subscribe((res: any) => {
      console.log(res);
      this.necDetail = res;
    });
  }

  bookBp(): void {
    console.log(this.bpsubForm.value);
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}');
    console.log(this.storage);
    const obj = { ...this.bpsubForm.value, PATIENT_ID: this.storage.PATIENT_ID, NEC_ID: this.necDetail[0].NEC_ID };
    console.log(obj);
    this.service['bpBook'](obj).subscribe((res: any) => {
      console.log(res);
      window.alert('Your Appointment has been Booked!');
      this.router.navigate(['/main']);
    });
  }
}
