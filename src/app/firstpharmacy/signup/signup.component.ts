import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorMsgService } from 'src/app/services/error-msg.service';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userSignupForm: any;


  constructor(private fb: FormBuilder, private service: FirstPharmacyService, private snackbar: ErrorMsgService,
    private router: Router, private route: ActivatedRoute) {
    this.userSignupForm = this.fb.group({
      patient_name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._]+@[a-z.]+\\.com$')])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*.?&])([a-zA-Z0-9@$!%*.?&]{8,})$')])],
    })

  }

  ngOnInit(): void {
  }

  signUp() {
    console.log(this.userSignupForm.value)
    this.service.signupData(this.userSignupForm.value).subscribe((res: any) => {
      this.snackbar.success(res.msg)
      console.log(res)


      // hasBackdrop: false
    });
    window.alert('Your are Successfully Signed Up!');
    this.router.navigate(['/'])

  }

}
