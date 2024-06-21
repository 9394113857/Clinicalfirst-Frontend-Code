import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-nurone',
  templateUrl: './nurone.component.html',
  styleUrls: ['./nurone.component.css']
})
export class NuroneComponent implements OnInit {
  nuroneForm: FormGroup;
  necDetails: any;
  NUR_ID: any;
  NUR_RECOMMENDATION_TYPE: any;
  storage: any;
  Nurse: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router,) { 
    
    this.nuroneForm= this.fb.group({
      PATIENT_ID:['',Validators.required],
      NEC_ID:['',Validators.required],
      NUR_SERVICE_ID:['',Validators.required],
      NUR_RECOMMEND_ID:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.getlist();
    this.getOppType();
    // this.getNurType();
  }
  getlist() {
    this.service.getItems().subscribe(res => {
      console.log(res)
      this.necDetails = res
     
    })
  }

  getOppType() {
    this.service.getOppurtunitie().subscribe(res =>{
      console.log(res)
      this.NUR_ID=res
    })
  }

  getNurType() {
    this.service.getOppurtunity().subscribe(res =>{
      console.log(res)
      this.NUR_RECOMMENDATION_TYPE=res
    })
  }

  bookNu(){
    console.log(this.nuroneForm.value)
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.storage)
    const obj ={...this.nuroneForm.value,PATIENT_ID:this.storage.PATIENT_ID,NEC_ID:this.necDetails[0].NEC_ID}

    console.log(obj)
    
    this.service.bookNur(obj).subscribe((res:any) =>{
    console.log(res)
    this.router.navigate(['/bedside'])
  })
 
}
onChangeService(NUR_SERVICE_ID: any) {
  const obj = {NUR_SERVICE_ID} 
  this.service.getNurseTypes(obj).subscribe(res => {
    console.log(res)
    this.Nurse = res;
  });
}

}
