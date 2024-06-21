import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-babyneo',
  templateUrl: './babyneo.component.html',
  styleUrls: ['./babyneo.component.css']
})
export class BabyneoComponent implements OnInit {
  babyNeoForm: FormGroup;
  bneo: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    
    this.babyNeoForm= this.fb.group({
      date:['',Validators.required],
      location:['',Validators.required],
      price:['',Validators.required],
      mab_service:['',Validators.required],
      id:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.babyneo();
  }
  babyneo() {
    this.service.getNeo().subscribe(res => {
      console.log(res)
      this.bneo = res
     
    })
  }
  
  proceedneo(){
    this.router.navigate(['/m&b/babyneo/book'])
  }

}
