import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-lactation',
  templateUrl: './lactation.component.html',
  styleUrls: ['./lactation.component.css']
})
export class LactationComponent implements OnInit {
  lactForm: FormGroup;
  lac: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    
    this.lactForm= this.fb.group({
      date:['',Validators.required],
      location:['',Validators.required],
      price:['',Validators.required],
      mab_service:['',Validators.required],
      id:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.lact();
  }
  lact() {
    this.service.getLact().subscribe(res => {
      console.log(res)
      this.lac = res
     
    })
  }
  
  proceedlact(){
    this.router.navigate(['/m&b/lact/book'])
  }

}
