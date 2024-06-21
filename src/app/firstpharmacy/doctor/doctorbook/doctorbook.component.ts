import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-doctorbook',
  templateUrl: './doctorbook.component.html',
  styleUrls: ['./doctorbook.component.css']
})
export class DoctorbookComponent implements OnInit {
  docConForm: FormGroup;
  storage: any;
  typeDetails: any;
  admin: any;
  Id: any;
  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router,) { 
    this.route.queryParams.subscribe(params =>{
      if(params['Id']){
        this.Id=params['Id']
        this.displayitems(params['Id'])
      }
     (console.log(params,'ppp'))})

    this.docConForm= this.fb.group({
      PATIENT_ID:['',Validators.required],
      SPECILIZATION_ID:['',Validators.required],
      DATE:['',Validators.required],
      TIME:['',Validators.required],
      CONSULTATION_FEE:['',Validators.required],
      })
  }

  ngOnInit(): void {
    
  }

  book(){
    console.log(this.docConForm.value)
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.storage)
    const obj ={...this.docConForm.value,PATIENT_ID:this.storage.PATIENT_ID}
    console.log(obj)
    
    this.service.bookDoc(obj).subscribe((res:any) =>{
    console.log(res)
  })
 
  window.alert('Your Appointment has been Booked!');
  this.router.navigate(['/main'])
}

displayitems(Id:any){
  this.service.getIdoctors({Doctor_ID:Id}).subscribe(res =>{
    this.typeDetails=res
    console.log(res)
    this.admin=res
    sessionStorage.setItem('specdetails',JSON.stringify(res))
  })
}


  bookCon(){
    console.log(this.docConForm.value)
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.storage)
    const obj ={...this.docConForm.value,PATIENT_ID:this.storage.PATIENT_ID,SPECILIZATION_ID:this.admin[0].SPECIALIZATION_ID}

    console.log(obj)
    
    this.service.bookDoc(obj).subscribe((res:any) =>{
    console.log(res)
  })
 
  window.alert('Your Appointment has been Booked!');
  this.router.navigate(['/main'])
}



}
