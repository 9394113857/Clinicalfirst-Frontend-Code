import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  userdetails: any;
  username: any;
  userDisplayName : any;
  user: any;
  usernames: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit(): void {
    // this.userDisplayName = sessionStorage.getItem('userdetails');
    // console.log(this.userDisplayName)
    
    this.userdetails = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.userdetails.PATIENT_ID,this.userdetails)
    this.username=this.userdetails
    this.allUsers();
  }

  bedsideService(){
    this.router.navigate(['/bedside'])
  }
  
  bpmonitorService(){
    this.router.navigate(['/bp'])
  }

  nurseService(){
    this.router.navigate(['/nur'])
  }

  mobyService(){
    this.router.navigate(['/m&b'])
  }

  doctorService(){
    this.router.navigate(['/doc'])
  }

  pregnancyService(){
    this.router.navigate(['/preg'])
  }

  rehabilitationService(){
    this.router.navigate(['/rehab'])
  }

  bloodbankService(){
    this.router.navigate(['/bloodbank'])
  }

  ambulanceService(){
    this.router.navigate(['/ambulance'])
  }

  PhysiotheparyService(){
    this.router.navigate(['/physio'])
  }
  
  Pregnancy(){
    this.router.navigate(['/preg'])
  }

  bookingService(){
    this.router.navigate(['/bookings'])
  }
  showfamily(){
    this.router.navigate(['/familymem'])
  }
  allUsers() {
    const obj = {  PATIENT_ID: this.userdetails.PATIENT_ID }
    this.service.usernames(obj).subscribe((res:any) => {
      console.log(res)
      this.user=res
    })
  }
}
