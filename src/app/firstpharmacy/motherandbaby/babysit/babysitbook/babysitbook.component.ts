import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-babysitbook',
  templateUrl: './babysitbook.component.html',
  styleUrls: ['./babysitbook.component.css']
})
export class BabysitbookComponent implements OnInit {
  babySitbookForm: FormGroup;
  basit: any;
  storage: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    
    this.babySitbookForm= this.fb.group({
      DATE :['',Validators.required],
      LOCATION :['',Validators.required],
      PRICE :['',Validators.required],
      MAB_SERVICE_ID :['',Validators.required],
      PATIENT_ID :['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.babysit();
  }
  babysit() {
    this.service.getSit().subscribe(res => {
      console.log(res)
      this.basit = res
     
    })
  }
  
  bookSit(){
    
      console.log(this.babySitbookForm.value)
      this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
      console.log(this.storage)
      const obj ={...this.babySitbookForm.value,PATIENT_ID:this.storage.PATIENT_ID,MAB_SERVICE_ID:this.basit[0].MAB_B_ID}
  
      console.log(obj)
      this.service.bookSitbaby(obj).subscribe((res:any) =>{
      console.log(res)
     

      
    })
    window.alert('Your Appointment has been Booked!');
    this.router.navigate(['/main'])
  }

}
