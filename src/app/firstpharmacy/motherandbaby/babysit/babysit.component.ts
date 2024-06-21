import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-babysit',
  templateUrl: './babysit.component.html',
  styleUrls: ['./babysit.component.css']
})
export class BabysitComponent implements OnInit {
  babySitForm: FormGroup;
  bsit: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    
    this.babySitForm= this.fb.group({
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
    this.service.getSit().subscribe(res => {
      console.log(res)
      this.bsit = res
    })
  }
  
  proceedsit(){
    this.router.navigate(['/m&b/babysit/book'])
  }

}
