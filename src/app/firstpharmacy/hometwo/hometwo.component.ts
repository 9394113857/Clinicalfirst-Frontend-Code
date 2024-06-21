import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-hometwo',
  templateUrl: './hometwo.component.html',
  styleUrls: ['./hometwo.component.css']
})
export class HometwoComponent implements OnInit {
  userdetails: any;
  user: any;
  userDetailForm: FormGroup;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) { 
    this.userDetailForm = this.fb.group({
      user_mail_id: ['', Validators.required],
      user_password: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    this.userdetails = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.userdetails.PATIENT_ID,this.userdetails)
    this.allUsers();
  }
  allUsers() {
    const obj = {  PATIENT_ID: this.userdetails.PATIENT_ID }
    this.service.usernames(obj).subscribe((res:any) => {
      console.log(res)
      this.user=res
    })
  }
  logout() {
    const timeout = 50;
    console.log(this.userDetailForm.value)
    //sessionStorage.removeItem('userdetails');
    sessionStorage.removeItem('userdetails')
    this.router.navigate([''])
  }
}
