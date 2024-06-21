import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-brestfeeding',
  templateUrl: './brestfeeding.component.html',
  styleUrls: ['./brestfeeding.component.css']
})
export class BrestfeedingComponent implements OnInit {
  bfsForm: FormGroup;
  bf: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    
    this.bfsForm= this.fb.group({
      date:['',Validators.required],
      location:['',Validators.required],
      price:['',Validators.required],
      mab_service:['',Validators.required],
      id:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.bfss();
  }
  bfss() {
    this.service.getBfs().subscribe(res => {
      console.log(res)
      this.bf = res
     
    })
  }
  
  proceedlact(){
    this.router.navigate(['/m&b/bfs/book'])
  }

}
