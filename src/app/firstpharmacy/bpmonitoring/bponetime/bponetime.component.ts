import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-bponetime',
  templateUrl: './bponetime.component.html',
  styleUrls: ['./bponetime.component.css']
})
export class BponetimeComponent implements OnInit {
  necDetail: any;
  bponeForm: FormGroup;
  SERVICE_ID: any;
  storage: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    this.bponeForm= this.fb.group({
      PATIENT_ID:['',Validators.required],
      NEC_ID:['',Validators.required],
      BOOKING_DATE:['',Validators.required],
      HOUSE_NO:['',Validators.required],
      FLOOR_NO:['',Validators.required],
      LOCALITY:['',Validators.required],
      CITY:['',Validators.required], 
      
    })
   }

  ngOnInit(): void {
    this.getlist();
  }
  getlist() {
    this.service.getItems().subscribe(res => {
      console.log(res)
      this.necDetail = res
     
    })
  }

  bookBp(){
    console.log(this.bponeForm.value)
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.storage)
    const obj ={...this.bponeForm.value,PATIENT_ID:this.storage.PATIENT_ID,NEC_ID:this.necDetail[0].NEC_ID}
    console.log(obj)
    this.service.bpBook(obj).subscribe((res:any) =>{
    console.log(res)
    this.router.navigate(['/bp'])
  })
 
  window.alert('Your Appointment has been Booked!');
  this.router.navigate(['/main'])
}
 

}
