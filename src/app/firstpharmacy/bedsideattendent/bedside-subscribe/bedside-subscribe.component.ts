import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-bedside-subscribe',
  templateUrl: './bedside-subscribe.component.html',
  styleUrls: ['./bedside-subscribe.component.css']
})
export class BedsideSubscribeComponent implements OnInit {
  bedSidesubForm: FormGroup;
  bsaType: any;
  bedsidetype: any;
  SERVICE_ID:any;
  opportunityType: any;
  necDetails: any;
  data: any;
  NEC_ID: any;
  userdetails: any;
  storage: any;
  
  
 
  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router,) { 
    
    this.bedSidesubForm= this.fb.group({
      PATIENT_ID:['',Validators.required],
      NEC_ID:['',Validators.required],
      SERVICE_ID:['',Validators.required],
      BOOKING_DATE:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.getOppTypes();
    this.getlist();
    
    
    //this.userdetails = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    //console.log(this.userdetails.PATIENT_ID,this.userdetails)
  }

  getOppTypes() {
    this.service.getOppurtunities().subscribe(res =>{
      console.log(res)
      this.SERVICE_ID=res
    })
  }

  book(){
    console.log(this.bedSidesubForm.value)
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.storage)
    const obj ={...this.bedSidesubForm.value,PATIENT_ID:this.storage.PATIENT_ID,NEC_ID:this.necDetails[0].NEC_ID}

    console.log(obj)
    
    //let res= sessionStorage.getItem('userdetails'); 
    //console.log(res)
    //this.details=res
   //this.bedSideForm.value.PATIENT_ID=this.ses.PATIENT_ID
    //const obj1 = {...this.bedSideForm.value.PATIENT_ID = this.ses[0].PATIENT_ID}

    
    this.service.bookData(obj).subscribe((res:any) =>{
    console.log(res)
    this.router.navigate(['/bp'])
  })
 
}
getlist() {
  this.service.getItem1().subscribe(res => {
    console.log(res)
    this.necDetails = res
   
  })
}


}
