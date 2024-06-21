import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit {
  docConForm: any;
  typeDetails: any;
  admin: any;
  cause1: any;
  Id: any;
  docList: any;

  constructor(private fb:FormBuilder,private service:FirstPharmacyService, private route:ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params =>{
      if(params['specialization_name']){
        this.Id=params['specialization_name']
        this.displayitems(params['specialization_name'])
        this.getDoctorslist(params['specialization_name'])
      }
     (console.log(params,'ppp'))})

    this.docConForm= this.fb.group({
      SPECIALIZATION_ID:['',Validators.required],
      })
  }

  ngOnInit(): void {
  

  }
  

  sss() {
    this.service.getSpec().subscribe(res => {
      console.log(res)
      this.cause1 = res

    })
  }

  displayitems(specialization_name:any){
    this.service.getItemDetail({SPECIALIZATION_NAME:specialization_name}).subscribe(res =>{
      this.typeDetails=res
      console.log(res)
      this.admin=res
      sessionStorage.setItem('specdetails',JSON.stringify(res))
    })
  }
  

  proceedDoc(Doctor_ID:any){
    this.router.navigate(['/doc/book'],{queryParams:{Id:Doctor_ID}});
  }

  getDoctorslist(specialization_name:any){
    this.service.getDoctors({SPECIALIZATION_NAME:specialization_name}).subscribe((res:any) => {
      this.docList=res 
    });
  }
}

