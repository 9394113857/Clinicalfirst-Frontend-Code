import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-babyneobook',
  templateUrl: './babyneobook.component.html',
  styleUrls: ['./babyneobook.component.css']
})
export class BabyneobookComponent implements OnInit {
  babyNeobookForm: FormGroup;
  baneo: any;
  storage: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    
    this.babyNeobookForm= this.fb.group({
      DATE :['',Validators.required],
      LOCATION :['',Validators.required],
      PRICE :['',Validators.required],
      MAB_SERVICE_ID :['',Validators.required],
      PATIENT_ID :['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.babyneo();
  }
  babyneo() {
    this.service.getSit().subscribe(res => {
      console.log(res)
      this.baneo = res
     
    })
  }
  
  bookNeo(){
    
      console.log(this.babyNeobookForm.value)
      this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
      console.log(this.storage)
      const obj ={...this.babyNeobookForm.value,PATIENT_ID:this.storage.PATIENT_ID,MAB_SERVICE_ID:this.baneo[0].MAB_B_ID}
  
      console.log(obj)
  
      
      this.service.bookSitbaby(obj).subscribe((res:any) =>{
      console.log(res)
      this.router.navigate(['/'])
    })
  }

}
