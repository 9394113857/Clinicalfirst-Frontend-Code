import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-nutdit',
  templateUrl: './nutdit.component.html',
  styleUrls: ['./nutdit.component.css']
})
export class NutditComponent implements OnInit {
  nutdietForm: FormGroup;
  nd: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    
    this.nutdietForm= this.fb.group({
      date:['',Validators.required],
      location:['',Validators.required],
      price:['',Validators.required],
      mab_service:['',Validators.required],
      id:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.nudi();
  }
  nudi() {
    this.service.getNd().subscribe(res => {
      console.log(res)
      this.nd = res
     
    })
  }
  
  proceednd(){
    this.router.navigate(['/m&b/nutdiet/book'])
  }

}
