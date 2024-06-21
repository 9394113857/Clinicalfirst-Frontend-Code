import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-motherandbaby',
  templateUrl: './motherandbaby.component.html',
  styleUrls: ['./motherandbaby.component.css']
})
export class MotherandbabyComponent implements OnInit {
  user: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userDet();
  }

  userDet() {
    this.service.getUser().subscribe(res => {
      console.log(res)
      this.user = res
    })
  }

  sit(){
    this.router.navigate(['/m&b/babysit'])
  }
  care(){
    this.router.navigate(['/m&b/babycare'])
  }
  lact(){
    this.router.navigate(['/m&b/lact'])
  }
  neo(){
    this.router.navigate(['/m&b/babyneo'])
  }
  radi(){
    this.router.navigate(['/m&b/radi'])
  }
  bfs(){
    this.router.navigate(['/m&b/bfs'])
  }
  nd(){
    this.router.navigate(['/m&b/nutdiet'])
  }
  gyn(){
    this.router.navigate(['/m&b/gyn'])
  }
}

