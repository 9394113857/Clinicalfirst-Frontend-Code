import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-physiotherapy',
  templateUrl: './physiotherapy.component.html',
  styleUrls: ['./physiotherapy.component.css']
})
export class PhysiotherapyComponent implements OnInit {
  oppDetailForm: any;
  
  physio: any;
  physio1: any;
  type: any;
  pres: any;
  storage: any;
  
  constructor(private fb: FormBuilder, private service: FirstPharmacyService,private router:Router) {
    this.oppDetailForm = this.fb.group({
      PATIENT_ID : ['', Validators.required],
      service_speciality: ['', Validators.required],
      condition_name: ['', Validators.required],
    })
  

   }

  ngOnInit(): void {
    this.getTherapyNames();
    
  }

  getTherapyNames() {
    this.service.getPhysio().subscribe(res => {
      console.log(res)
      this.physio = res
    })
  }
 
  getTherapyNames1() {
    this.service.getPhysio1().subscribe(res => {
      console.log(res)
      this.physio1 = res
    })
  }

  onChangeTherapy(service_spec: any) {
    const obj = {service_spec} 
    this.service.getPhysioTypes(obj).subscribe(res => {
      console.log(res)
      this.pres = res;
    });
  }

  book(){
    console.log(this.oppDetailForm.value)
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.storage)
    const obj = { ...this.oppDetailForm.value, PATIENT_ID: this.storage.PATIENT_ID }
    this.service.postItemsp(obj).subscribe(res =>{
      console.log(res)
      this.type=res;
    })
    
    window.alert('Your Appointment has been Booked!');
    this.router.navigate(['/main'])
  }

  
}