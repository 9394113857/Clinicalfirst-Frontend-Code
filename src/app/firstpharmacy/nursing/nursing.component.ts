import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-nursing',
  templateUrl: './nursing.component.html',
  styleUrls: ['./nursing.component.css']
})
export class NursingComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  oneTime(){
    this.router.navigate(['/nurone'])
  }

  subscribe(){
    this.router.navigate(['/nursub'])
  }


}
