import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-pregnancy',
  templateUrl: './pregnancy.component.html',
  styleUrls: ['./pregnancy.component.css']
})
export class PregnancyComponent implements OnInit {
  pregDetails: any;
  pregCareForm: any;
  pregC: any;
  pregS: any;
  storage: any;
  specname: any;
  specializationname: any;
  pwc_service: any;
  Id: any;
  typeDetails: any;
  admin: any;
  docList: any;
  basicnames2: any;
  pregC1: any;

  constructor(private fb: FormBuilder, private service: FirstPharmacyService, private route: ActivatedRoute, private router: Router,) {

    this.route.queryParams.subscribe(params =>{
      if(params['specialization_name']){
        this.Id=params['specialization_name']
        this.displayitems(params['specialization_name'])
        this.getDoctorslist(params['specialization_name'])
      }
     (console.log(params,'ppp'))
    }),
    this.route.queryParams.subscribe(params => {
      if (params['PWC_ID']) {
        this.basicnames2 = params['PWC_ID']
      }
      (console.log(params, 'ppp3'))
    })
   ,
    this.pregCareForm = this.fb.group({
      SPECIALIZATION_ID: ['', Validators.required],
      pwc_service: ['', Validators.required],
      PATIENT_ID:['',]

    })
  }


  ngOnInit(): void {
    this.getPregcare();
    this.getPregSpec();
    this.usser();
  }

  displayitems(specialization_name:any){
    this.service.getSpecaizeDetail({SPECIALIZATION_NAME:specialization_name}).subscribe(res =>{
      this.typeDetails=res
      console.log(res)
      this.admin=res
      sessionStorage.setItem('specdetails',JSON.stringify(res))
    })
  }
  
  getDoctorslist(specialization_name:any){
    this.service.getpregDoctors({SPECIALIZATION_NAME:specialization_name}).subscribe((res:any) => {
      this.docList=res 
    });

  }
  
  usser() {
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.storage)

    const item = sessionStorage.getItem('userdetails.PATIENT_ID');
    console.log(item)

  }
  getPreglist() {
    this.service.getPregstage().subscribe(res => {
      console.log(res)
      this.pregDetails = res

    })
  }

  getPregcare() {
    this.service.getPregcare1().subscribe(res => {
      console.log(res)
      this.pregC = res

    })
  }
  // PWCONE(PWC_ID:any) {
  //   this.service.getPregcare({PWC_P_T_NAME:PWC_ID}).subscribe(res => {
  //     console.log(res)
  //     this.pregC1 = res

  //   })
  // }
  getPregSpec() {
    this.service.getPregSpeca().subscribe(res => {
      console.log(res)
      this.pregS = res
    })
  }


  BFDD() {

    console.log(this.pregCareForm.value)
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.storage)
    const obj = {
      SPECIALIZATION_ID: this.specializationname,
      pwc_service: this.pwc_service,
      PATIENT_ID:this.storage.PATIENT_ID
    }
   // const obj ={...this.pregCareForm.value,PATIENT_ID:this.storage.PATIENT_ID}

    console.log(obj)
    
    this.service.bookPreg(obj).subscribe((res:any) =>{
    console.log(res)
 })
  
  }


  pregSpecCare(PWC_P_T_NAME: any) {
    this.router.navigate(['/preg'],{ queryParams: { PWC_ID: PWC_P_T_NAME}});
  }

  pregSpec(SPECIALIZATION_NAME: any) {
    this.router.navigate(['/preg/list'],{ queryParams: { specialization_name: SPECIALIZATION_NAME,PWk_ID:this.basicnames2}});
  }
  selectedSpec(data:any){
    this.specname=data.SPECIALIZATION_NAME
  }
  selectedspecialization(data: any) {
    this.specializationname = data.SPECIALIZATION_NAME
  }

  selectedpwc(data: any) {
    this.pwc_service = data.PWC_P_T_NAME

  }
}
