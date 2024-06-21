import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-gynecologybook',
  templateUrl: './gynecologybook.component.html',
  styleUrls: ['./gynecologybook.component.css']
})
export class GynecologybookComponent implements OnInit {
  gynbookForm: FormGroup;
  gyn: any;
  storage: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    
    this.gynbookForm= this.fb.group({
      DATE :['',Validators.required],
      LOCATION :['',Validators.required],
      PRICE :['',Validators.required],
      MAB_SERVICE_ID :['',Validators.required],
      PATIENT_ID :['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.gyne();
  }
  gyne() {
    this.service.getGyn().subscribe(res => {
      console.log(res)
      this.gyn = res
     
    })
  }
  
  bookGyn(){
    
      console.log(this.gynbookForm.value)
      this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
      console.log(this.storage)
      const obj ={...this.gynbookForm.value,PATIENT_ID:this.storage.PATIENT_ID,MAB_SERVICE_ID:this.gyn[0].MAB_M_ID}
  
      console.log(obj)
  
      
      this.service.bookSitbaby(obj).subscribe((res:any) =>{
      console.log(res)
    })
    
    window.alert('Your Appointment has been Booked!');
    this.router.navigate(['/main'])
  }

}
