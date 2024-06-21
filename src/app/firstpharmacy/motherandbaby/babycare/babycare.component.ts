import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-babycare',
  templateUrl: './babycare.component.html',
  styleUrls: ['./babycare.component.css']
})
export class BabycareComponent implements OnInit {
  bcare: any;
  babyCareForm: FormGroup;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) { 
  this.babyCareForm= this.fb.group({
    date:['',Validators.required],
    location:['',Validators.required],
    price:['',Validators.required],
    mab_service:['',Validators.required],
    id:['',Validators.required]
  })
}
  ngOnInit(): void {
    this.babysit();
  }

  babysit() {
    this.service.getCare().subscribe(res => {
      console.log(res)
      this.bcare = res
     
    })
  }
  proceedcare(){
    this.router.navigate(['/m&b/babycare/book'])
  }

}
