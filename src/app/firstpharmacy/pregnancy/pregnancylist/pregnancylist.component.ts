import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-pregnancylist',
  templateUrl: './pregnancylist.component.html',
  styleUrls: ['./pregnancylist.component.css']
})
export class PregnancylistComponent implements OnInit {
  pregDetails: any;
  pregCareForm: any;
  pregC: any;
  pregS: any;
  storage: any;
  specname: any;
  
  pwc_service: any;
  Id: any;
  typeDetails: any;
  admin: any;
  docList: any;
  specializationname: any;
  
  typeDetails2: any;
  value: any;
  pwcid: any;
  pregcareDetails: any;

  constructor(private fb: FormBuilder, private service: FirstPharmacyService, private route: ActivatedRoute, private router: Router,) {

    this.route.queryParams.subscribe(params =>{
      if(params['specialization_name']){
        this.Id=params['specialization_name']
        this.displayitems(params['specialization_name'])
        this.getDoctorslist(params['specialization_name']) 
      }
     (console.log(params,'ppp'))
     this.pregcareDetails=params}),
    //  this.route.queryParams.subscribe(params =>{
    //    if(params['PWC_SERVICE_ID']){
    //      this.value=params['PWC_SERVICE_ID']
    //    }
    //  }),
     this.route.queryParams.subscribe(params =>{
      if(params['PWk_ID']){
        this.pwcid=params['PWk_ID']
        this.itemdisplay(params['PWk_ID'])
      }
     (console.log(params,'ppp1'))}),
     
    
    this.pregCareForm = this.fb.group({
      SPECIALIZATION_ID: ['', Validators.required],
      pwc_service: ['', Validators.required],
      PATIENT_ID:['',]

    })
  }

  ngOnInit(): void {
    
  }

  displayitems(specialization_name:any){
    this.service.getSpecaizeDetail({SPECIALIZATION_NAME:specialization_name}).subscribe(res=>{
      console.log(res)
      this.admin=res
      // sessionStorage.setItem('specdetails',JSON.stringify(res))
    })
  }
  itemdisplay(PWk_ID:any){
    this.service.getPregcare({ PWC_P_T_NAME : PWk_ID }).subscribe(res => {
      console.log(res)
      this.typeDetails2 = res
    })
  }
  getDoctorslist(specialization_name:any){
    this.service.getpregDoctors({SPECIALIZATION_NAME:specialization_name}).subscribe((res:any) => {
      this.docList=res 
    });
  }
  
  pregbook(Doctor_ID:any){
    this.router.navigate(['/preg/book'],{queryParams:{Id:Doctor_ID,specializationname:this.Id,pwkk_id:this.pwcid}})
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

}
