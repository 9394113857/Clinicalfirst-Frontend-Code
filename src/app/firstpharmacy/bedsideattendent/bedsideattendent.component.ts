import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-bedsideattendent',
  templateUrl: './bedsideattendent.component.html',
  styleUrls: ['./bedsideattendent.component.css']
})
export class BedsideattendentComponent implements OnInit {
  bedSideForm:FormGroup;
  bedside_type:any;


  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) { 
    this.bedSideForm= this.fb.group({
      bedside_type:['',Validators.required]

    })

  }

  ngOnInit(): void {
  } 

  oneTime(){
    this.router.navigate(['/bso'])
  }

  subscribe(){
    this.router.navigate(['/bss'])
  }


}
