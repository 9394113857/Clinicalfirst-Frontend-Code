import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-radiology',
  templateUrl: './radiology.component.html',
  styleUrls: ['./radiology.component.css']
})
export class RadiologyComponent implements OnInit {
  radiForm: FormGroup;
  rad: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    
    this.radiForm= this.fb.group({
      date:['',Validators.required],
      location:['',Validators.required],
      price:['',Validators.required],
      mab_service:['',Validators.required],
      id:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.radi();
  }
  radi() {
    this.service.getRadi().subscribe(res => {
      console.log(res)
      this.rad = res
     
    })
  }
  
  proceedradi(){
    this.router.navigate(['/m&b/radi/book'])
  }

}
