import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-ambulance2',
  templateUrl: './ambulance2.component.html',
  styleUrls: ['./ambulance2.component.css']
})
export class Ambulance2Component implements OnInit {
  oppDetailForm: FormGroup | undefined;
  cause1: any;
  emergency: any;
  basicnames: any;
  typeDetails: any;
  name: any;
  name1: any;
  typeDetails1: any;
  typeDetails2: any;
  basicnames1: any;
  basicnames2: any;
  AmbForm: FormGroup;
  storage: any;
  causename: any;
  typeDetails3: any;
  typeDetails4: any;

  constructor(private fb: FormBuilder, private router: Router, private service: FirstPharmacyService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['name']) {
        this.basicnames = params['name']
        this.displayitems(params['name'])
        this.displayitems3(params['name'])
      }
      (console.log(params, 'ppp1'))
    }),

      this.route.queryParams.subscribe(params => {
        if (params['name1']) {
          this.basicnames = params['name1']
          this.displayitems1(params['name1'])
          this.displayitems4(params['name1'])
        }
        (console.log(params, 'ppp1'))
      }),

      this.route.queryParams.subscribe(params => {
        if (params['emergencyid']) {
          this.basicnames2 = params['emergencyid']
          this.displayitems2(params['emergencyid'])
        }
        (console.log(params, 'ppp2'))        
      }),



      this.AmbForm = this.fb.group({
        patient_id: ['', Validators.required],
        situation_type: ['', Validators.required],
        amb_type:['', Validators.required],
        advance_name_or_basic: ['', Validators.required],
        cause: ['', Validators.required]
      })
  }

  ngOnInit(): void {
    this.sitnames1();
    // this.getambemergency();
  }
  displayitems(name: any) {
    this.service.getItemDetail2({ BASIC_TYPE_ID: name }).subscribe(res => {
      console.log(res)
      this.typeDetails = res
    })
  }
  displayitems1(name1: any) {
    this.service.getItemDetail1({ ADVANCED_TYPE_ID: name1 }).subscribe(res => {
      console.log(res)
      this.typeDetails1 = res
    })
  }
  displayitems2(emergencyid: any) {
    this.service.getItemDetail3({ SITUATION_ID: emergencyid }).subscribe(res => {
      console.log(res)
      this.typeDetails2 = res
    })
  }
  displayitems3(name: any){
    this.service.getItemDetail4({ BASIC_TYPE_ID: name }).subscribe(res => {
      console.log(res)
      this.typeDetails3 = res
    })
  }
  displayitems4(name1: any){
    this.service.getItemDetail5({ ADVANCED_TYPE_ID: name1 }).subscribe(res => {
      console.log(res)
      this.typeDetails4 = res
    })
  }
  sitnames1() {
    this.service.causenames().subscribe(res => {
      console.log(res)
      this.cause1 = res
    })
  }
  book() {
    console.log(this.AmbForm.value, this.causename)
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    const obj1 = {
      ...this.AmbForm.value,
      patient_id: this.storage.PATIENT_ID,
      cause: this.causename,
      // situation_type: this.typeDetails2,
      amb_type:this.typeDetails3 ? this.typeDetails3 [0].AMB_TYPE : this.typeDetails4[0].AMB_TYPE,
      situation_type: this.typeDetails2[0].SITUATION_TYPE,
      advance_name_or_basic: this.typeDetails1 ? this.typeDetails1[0].ADVANCED_TYPE_NAME : this.typeDetails[0].BASIC_TYPE_NAME,
    }
    console.log(obj1)
    this.service.Bookambulance(obj1).subscribe((res:any) => {
      console.log(res)
    })
  }
  // window.alert('Your Ambulance has been Booked!');
  // this.router.navigate(['/main'])
  selectedcauses(data: any) {
    this.causename = data.CAUSE_TYPE
  }
  // basicnnames(data:any){
  //   this.basicname = data.BASIC_TYPE_NAME
  // }
  // getambemergency() {
  //   this.service.ambemer().subscribe(res => {
  //     console.log(res)
  //     this.emergency = res
  //   })
  // }
}
