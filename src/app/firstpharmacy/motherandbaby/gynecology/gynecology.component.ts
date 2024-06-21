import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-gynecology',
  templateUrl: './gynecology.component.html',
  styleUrls: ['./gynecology.component.css']
})
export class GynecologyComponent implements OnInit {
  gynForm: FormGroup;
  gyn: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    
    this.gynForm= this.fb.group({
      date:['',Validators.required],
      location:['',Validators.required],
      price:['',Validators.required],
      mab_service:['',Validators.required],
      id:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.gyne();
  }
  gyne() {
    this.service.getGyn().subscribe(res => {
      console.log(res)
      this.gyn = res
     
    })
  }
  
  proceedgyn(){
    this.router.navigate(['/m&b/gyn/book'])
  }

}
