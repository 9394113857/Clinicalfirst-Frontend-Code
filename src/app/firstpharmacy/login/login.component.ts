import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirstPharmacyService } from 'src/app/services/first-pharmacy.service';
import { ErrorMsgService } from 'src/app/services/error-msg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetailForm: FormGroup;
  userdetails: any;
  familymembers: any;

  constructor(private fb: FormBuilder, private service: FirstPharmacyService, private router: Router, private route: ActivatedRoute,
    private authservice: AuthService, private errmsg: ErrorMsgService) {
    this.userDetailForm = this.fb.group({
      email:  ['', Validators.compose([Validators.required])],
      password:  ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      // name: ['', Validators.required]

    })
  }

  ngOnInit(): void {
  }


  login() {
    console.log(this.userDetailForm.value)
    this.service.loginData(this.userDetailForm.value).subscribe((res: any) => {
      alert("login successful");
      this.userDetailForm.reset();
      this.router.navigate(['/home2']);
      // this.errmsg.success(res.msg)
      console.log(res)
      this.familymembers=res
      // const user = res.map((a:any) => {
      //   return a.email === this.userDetailForm.value.email && a.password === this.userDetailForm.value.password
      // });
      // const user = this.authservice.authUser(res)
      // if (user) {
      //   console.log('login successful');
      // } else {
      //   console.log('login not successful');
      // }
      // sessionStorage.setItem('name', 'PATIENT_NAME');
      sessionStorage.setItem('userdetails', JSON.stringify(res))
      // sessionStorage.setItem('userdetails', '{PATIENT_NAME}')
      // localStorage.setItem('userdetails1', JSON.stringify(res))
      // window.location.reload();

    },err=>{
      alert("user not found")
    });
  }
  login1() {
    console.log(this.userDetailForm.value)
    this.service.loginData(this.userDetailForm.value).subscribe((res: any) => {
      const user = res.find((a:any) =>{
        return a.email === this.userDetailForm.value.email && a.password === this.userDetailForm.value.password
      });
      if (user){
        alert("login succesful");
        this.userDetailForm.reset();
        this.router.navigate(['/main']);
      }else{
        alert("user not found !!");
      }
    }, err=>{
        alert("something went wrong");
    })
  }
  






  sign() {
    this.router.navigate(['/signup'])
  }
}





const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });