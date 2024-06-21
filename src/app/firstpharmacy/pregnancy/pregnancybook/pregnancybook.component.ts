import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-pregnancybook',
  templateUrl: './pregnancybook.component.html',
  styleUrls: ['./pregnancybook.component.css']
})
export class PregnancybookComponent implements OnInit {
  pregCareForm: FormGroup;
  storage: any;
  Id: any;
  typeDetails: any;
  admin1: any; // Corrected to admin1
  admin2: any; // Corrected to admin2

  constructor(
    private fb: FormBuilder,
    private service: FirstPharmacyService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      if (params['Id']) {
        this.Id = params['Id'];
        this.displayitems(params['Id']);
      }
      console.log(params, 'ppp');
    });

    this.route.queryParams.subscribe(params => {
      if (params['specializationname']) {
        this.Id = params['specializationname'];
        this.displayitem(params['specializationname']);
      }
      console.log(params, 'rrr');
    });

    this.route.queryParams.subscribe(params => {
      if (params['pwkk_id']) {
        this.Id = params['pwkk_id'];
        this.displayitem12(params['pwkk_id']);
      }
      console.log(params, 'rrr');
    });

    this.pregCareForm = this.fb.group({
      SPECIALIZATION_ID: ['', Validators.required],
      PWC_P_T_ID: ['', Validators.required],
      PATIENT_ID: ['', Validators.required],
      LOCATION: ['', Validators.required],
      PRICE: ['', Validators.required],
      DATE: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    
  }

  displayitems(Id: any) {
    this.service['getIdoctors']({ Doctor_ID: Id }).subscribe((res: any) => {
      sessionStorage.setItem('specdetails', JSON.stringify(res));
      this.typeDetails = res;
      console.log(res);
      this.admin1 = res; // Assigning to admin1
    });
  }

  getDoctorslist(specialization_name: any) {
    this.service['getpregDoctors']({ SPECIALIZATION_NAME: specialization_name }).subscribe((res: any) => {
      this.admin1 = res;
      console.log(res);
    });
  }

  Book() {
    console.log(this.pregCareForm.value);
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}');
    console.log(this.storage);

    const obj = {
      ...this.pregCareForm.value,
      PATIENT_ID: this.storage.PATIENT_ID,
      SPECIALIZATION_ID: this.admin1[0].SPECIALIZATION_ID,
      PWC_P_T_ID: this.admin2[0].PWC_P_T_ID
    };

    console.log(obj);

    this.service['book'](obj).subscribe((res: any) => {
      console.log(res);
      window.alert('Your Appointment has been Booked!');
      this.router.navigate(['/main']);
    });
  }

  displayitem(specialization_name: any) {
    this.service['getSpecaizeDetail']({ SPECIALIZATION_NAME: specialization_name }).subscribe((res: any) => {
      console.log(res);
      this.admin1 = res; // Assigning to admin1
    });
  }

  displayitem12(pwkk_id: any) {
    this.service['getSpecaizeDetail12']({ PWC_P_T_NAME: pwkk_id }).subscribe((res: any) => {
      console.log(res);
      this.admin2 = res; // Assigning to admin2
    });
  }
}
