import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user: any) {
    let UserArray = [];
    if (sessionStorage.getItem('userdetails1')) {
      UserArray = JSON.parse(sessionStorage.getItem('userdetails1')|| '{}');
    }
    return UserArray.PATIENT_ID ? true : false
  }
}
