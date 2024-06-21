import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userDetailForm: any;

  constructor(private fb: FormBuilder, private service: FirstPharmacyService,private router:Router,private route:ActivatedRoute,) { 
  this.userDetailForm = this.fb.group({
    user_mail_id: ['', Validators.required],
    user_password: ['', Validators.required]
  })
}
  ngOnInit(): void {
  }

  
  logout() {
    const timeout = 50;
    console.log(this.userDetailForm.value)
    //sessionStorage.removeItem('userdetails');
    sessionStorage.removeItem('userdetails')
    this.router.navigate([''])
    // const dialogRef = this.dialog.open(Popup1Component, { 
    //   width: '400px',
    //   height: '140px',
    // })
    // setTimeout(() => {dialogRef.close(); }, timeout)
    
    // hasBackdrop: false
  }

  bookingService(){
    this.router.navigate(['/bookings'])
  }
}


