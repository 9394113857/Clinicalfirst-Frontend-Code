import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-bloodbank',
  templateUrl: './bloodbank.component.html',
  styleUrls: ['./bloodbank.component.css']
})
export class BloodbankComponent implements OnInit {

  yes:boolean = true;
  yes1:boolean = false;
  yes2:boolean = false;
  yes3:boolean = false;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) { 
  }
  ngOnInit(): void {
  }

  two(){
    this.router.navigate(['/receiver'])
  }

  one(){
    this.router.navigate(['/donor'])
  }


}
