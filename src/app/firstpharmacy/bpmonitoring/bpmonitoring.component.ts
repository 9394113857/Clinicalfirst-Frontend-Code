import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-bpmonitoring',
  templateUrl: './bpmonitoring.component.html',
  styleUrls: ['./bpmonitoring.component.css']
})
export class BpmonitoringComponent implements OnInit {

  bPForm:FormGroup;
  bedside_type:any;
  bsaType: any;
  necDetails: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) { 
    this.bPForm= this.fb.group({
      bedside_type:['',Validators.required]

    })

  }
  ngOnInit(): void {
  }
  oneTime(){
    this.router.navigate(['/bpone'])
  }

  subscribe(){
    this.router.navigate(['/bpsub'])
  }
}
