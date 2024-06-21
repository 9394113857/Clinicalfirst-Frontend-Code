import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-babycarebook',
  templateUrl: './babycarebook.component.html',
  styleUrls: ['./babycarebook.component.css']
})
export class BabycarebookComponent implements OnInit {
  babyCarebookForm: FormGroup;
  bacare: any;
  storage: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    
    this.babyCarebookForm= this.fb.group({
      DATE :['',Validators.required],
      LOCATION :['',Validators.required],
      PRICE :['',Validators.required],
      MAB_SERVICE_ID :['',Validators.required],
      PATIENT_ID :['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.babyCare();
  }
  babyCare() {
    this.service.getCare().subscribe(res => {
      console.log(res)
      this.bacare = res
     
    })
  }
  
  bookCare(){
    
      console.log(this.babyCarebookForm.value)
      this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
      console.log(this.storage)
      const obj ={...this.babyCarebookForm.value,PATIENT_ID:this.storage.PATIENT_ID,MAB_SERVICE_ID:this.bacare[0].MAB_B_ID}
  
      console.log(obj)
  
      
      this.service.bookSitbaby(obj).subscribe((res:any) =>{
      console.log(res)
      this.router.navigate(['/'])
    })
  }

}
