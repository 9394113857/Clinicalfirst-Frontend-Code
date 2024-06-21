import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';


@Component({
  selector: 'app-rehabilitation',
  templateUrl: './rehabilitation.component.html',
  styleUrls: ['./rehabilitation.component.css']
})
export class RehabilitationComponent implements OnInit {
  oppDetailForm: FormGroup;
  Therapy: any;
  Therapy1: any;
  type: any;
  storage: any;
  constructor(private fb: FormBuilder, private service: FirstPharmacyService, private router: Router, private route: ActivatedRoute,) {
    this.oppDetailForm = this.fb.group({
      PATIENT_ID: ['', Validators.required],
      THERAPY_NAME: ['', Validators.required],
      TYPE_NAME: ['', Validators.required],
    })
  }
  ngOnInit(): void {
    this.getTherapyNames();
  }
  getTherapyNames() {
    this.service.getTherapy().subscribe(res => {
      console.log(res)
      this.Therapy1 = res
    })
  }
  onChangeTherapy(reh_id: any) {
    const obj = { reh_id }
    this.service.getTherapyTypes(obj).subscribe(res => {
      console.log(res)
      this.Therapy = res;
    });
  }
  book() {
    console.log(this.oppDetailForm.value)
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.storage)
    const obj = { ...this.oppDetailForm.value, PATIENT_ID: this.storage.PATIENT_ID }
    this.service.postItems(obj).subscribe(res => {
      console.log(res)
      this.type = res;
    })
  }
}
