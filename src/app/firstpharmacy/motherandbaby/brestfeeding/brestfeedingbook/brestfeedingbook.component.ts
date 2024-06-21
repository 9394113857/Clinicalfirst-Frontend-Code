import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-brestfeedingbook',
  templateUrl: './brestfeedingbook.component.html',
  styleUrls: ['./brestfeedingbook.component.css']
})
export class BrestfeedingbookComponent implements OnInit {
  bfsbookForm: FormGroup;
  bf: any;
  storage: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    
    this.bfsbookForm= this.fb.group({
      DATE :['',Validators.required],
      LOCATION :['',Validators.required],
      PRICE :['',Validators.required],
      MAB_SERVICE_ID :['',Validators.required],
      PATIENT_ID :['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.bfss();
  }
  bfss() {
    this.service.getBfs().subscribe(res => {
      console.log(res)
      this.bf = res
     
    })
  }
  
  bookBfs(){
    
      console.log(this.bfsbookForm.value)
      this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
      console.log(this.storage)
      const obj ={...this.bfsbookForm.value,PATIENT_ID:this.storage.PATIENT_ID,MAB_SERVICE_ID:this.bf[0].MAB_M_ID}
  
      console.log(obj)
  
      
      this.service.bookSitbaby(obj).subscribe((res:any) =>{
      console.log(res)
      this.router.navigate(['/'])
    })
    
    window.alert('Your Appointment has been Booked!');
    this.router.navigate(['/main'])
  }

}
