import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-familymembers',
  templateUrl: './familymembers.component.html',
  styleUrls: ['./familymembers.component.css']
})
export class FamilymembersComponent implements OnInit {
  familyForm: FormGroup;
  public crudData: any = [];
  storage: any;
  familyDetails: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) { 
    this.familyForm= this.fb.group({
      PATIENT_ID:['',Validators.required],
     
      })
  }

  ngOnInit(): void {
    this.showData();
  }
  showData(){
    console.log(this.familyForm.value)
    this.storage = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.storage)
    const obj ={...this.familyForm.value,PATIENT_ID:this.storage.PATIENT_ID}
    console.log(obj)
  
    this.service.familyItems(obj).subscribe((res:any) =>{
    console.log(res)
    this.familyDetails=res

    })

  }

  
}