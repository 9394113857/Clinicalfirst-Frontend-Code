import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-nursub',
  templateUrl: './nursub.component.html',
  styleUrls: ['./nursub.component.css']
})
export class NursubComponent implements OnInit {
  nursubForm: FormGroup;
  necDetails: any;
  NUR_ID: any;
  NUR_RECOMMENDATION_TYPE: any;
  storage: any;
  Nurse: any;

  constructor(
    private fb: FormBuilder,
    private service: FirstPharmacyService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.nursubForm = this.fb.group({
      PATIENT_ID: ['', Validators.required],
      NEC_ID: ['', Validators.required],
      NUR_SERVICE_ID: ['', Validators.required],
      NUR_RECOMMEND_ID: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getlist();
    this.getOppType();
    this.getNurType();
  }

  getlist(): void {
    this.service['getItem1']().subscribe((res: any) => {
      console.log(res);
      this.necDetails = res;
    });
  }

  getOppType(): void {
    this.service['getOppurtunitie']().subscribe((res: any) => {
      console.log(res);
      this.NUR_ID = res;
    });
  }

  getNurType(): void {
    this.service['getOppurtunity']().subscribe((res: any) => {
      console.log(res);
      this.NUR_RECOMMENDATION_TYPE = res;
    });
  }

  bookNu(): void {
    console.log(this.nursubForm.value);
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}');
    console.log(this.storage);
    const obj = { ...this.nursubForm.value, PATIENT_ID: this.storage.PATIENT_ID, NEC_ID: this.necDetails[0].NEC_ID };

    console.log(obj);

    this.service['bookNur'](obj).subscribe((res: any) => {
      console.log(res);
    });

    window.alert('Your Appointment has been Booked!');
    this.router.navigate(['/main']);
  }

  onChangeService(NUR_SERVICE_ID: any): void {
    const obj = { NUR_SERVICE_ID };
    this.service.getNurseTypes(obj).subscribe((res: any) => {
      console.log(res);
      this.Nurse = res;
    });
  }
}
