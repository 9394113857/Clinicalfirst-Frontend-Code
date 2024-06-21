import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-radiologybook',
  templateUrl: './radiologybook.component.html',
  styleUrls: ['./radiologybook.component.css']
})
export class RadiologybookComponent implements OnInit {
  radibookForm: FormGroup;
  rad: any;
  storage: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    
    this.radibookForm= this.fb.group({
      DATE :['',Validators.required],
      LOCATION :['',Validators.required],
      PRICE :['',Validators.required],
      MAB_SERVICE_ID :['',Validators.required],
      PATIENT_ID :['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.radi();
  }
  radi() {
    this.service.getRadi().subscribe(res => {
      console.log(res)
      this.rad = res
     
    })
  }
  
  bookRadi(){
    
      console.log(this.radibookForm.value)
      this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
      console.log(this.storage)
      const obj ={...this.radibookForm.value,PATIENT_ID:this.storage.PATIENT_ID,MAB_SERVICE_ID:this.rad[0].MAB_M_ID}
  
      console.log(obj)
  
      
      this.service.bookSitbaby(obj).subscribe((res:any) =>{
      console.log(res)
      this.router.navigate(['/'])
    })
    
    window.alert('Your Appointment has been Booked!');
    this.router.navigate(['/main'])
  }

}
