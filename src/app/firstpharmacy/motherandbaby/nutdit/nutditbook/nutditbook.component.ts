import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nutditbook',
  templateUrl: './nutditbook.component.html',
  styleUrls: ['./nutditbook.component.css']
})
export class NutditbookComponent implements OnInit {
  nutdietbookForm: FormGroup;
  nd: any;
  storage: any;
  http: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    
    this.nutdietbookForm= this.fb.group({
      DATE :['',Validators.required],
      LOCATION :['',Validators.required],
      PRICE :['',Validators.required],
      MAB_SERVICE_ID :['',Validators.required],
      PATIENT_ID :['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.nudi();
  }
  nudi() {
    this.service.getNd().subscribe(res => {
      console.log(res)
      this.nd = res
     
    })
  }
  
  bookNd(){
    
      console.log(this.nutdietbookForm.value)
      this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
      console.log(this.storage)
      const obj ={...this.nutdietbookForm.value,PATIENT_ID:this.storage.PATIENT_ID,MAB_SERVICE_ID:this.nd[0].MAB_M_ID}
  
      console.log(obj)
  
      
      this.service.bookSitbaby(obj).subscribe((res:any) =>{
      console.log(res)
    })
    
    window.alert('Your Appointment has been Booked!');
    this.router.navigate(['/main'])
  }

}
