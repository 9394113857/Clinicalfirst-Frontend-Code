import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  nam: any;
  cause1: any;
  docConForm: FormGroup;
  SPECIALIZATION_ID: any;
  page1: boolean = true;
  page2: boolean = false;
  docDetails: any;

  constructor(private fb: FormBuilder, private service: FirstPharmacyService, private route: ActivatedRoute, private router: Router) {
    this.docConForm = this.fb.group({
      PATIENT_ID: ['', Validators.required],
      SPECILIZATION_ID: ['', Validators.required],
      DATE: ['', Validators.required],
      TIME: ['', Validators.required],
      CONSULTATION_FEE: ['', Validators.required],
    })
  }

  ngOnInit(): void {

    this.getlists();
  }


  sss() {
    this.service.getSpec().subscribe(res => {
      console.log(res)
      this.cause1 = res
    })
  }
  preview1(SPECIALIZATION_NAME: any) {
    this.page1 = false;
    this.page2 = true;
    this.router.navigate(['/doc/list'], { queryParams: { specialization_name: SPECIALIZATION_NAME } });
  }
  getlists() {
    this.service.getSpec().subscribe((res: any) => {
      this.docDetails = res
    });
  }
}
