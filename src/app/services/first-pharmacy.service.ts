import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from '../service_url/urls';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstPharmacyService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  // Login API
  public loginData(data: any) {
    return this.http.post(`${environment.BASE_URL}login01`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Signup API
  public signupData(data: any) {
    return this.http.post(`${environment.BASE_URL}patient_signup`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Example of a GET request with a specific URL from Urls file
  public getOppurtunities() {
    return this.http.get<any>(Urls.BSATYPE).pipe(
      catchError(error => throwError(error))
    );
  }

  // Example of a POST request with a specific URL from Urls file
  public getNurseTypes(data: any) {
    return this.http.post(`${environment.BASE_URL}recnur`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Example of a POST request without a specific URL from Urls file
  public bookData(data: any) {
    return this.http.post(`${environment.BASE_URL}bsa_booking`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Book Sitbaby API
  public bookSitbaby(data: any) {
    return this.http.post(`${environment.BASE_URL}mb_booking`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Book BP API
  public bpBook(data: any) {
    return this.http.post(`${environment.BASE_URL}test_bsa`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Items API
  public getItems() {
    return this.http.get(`${environment.BASE_URL}onetime`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Book Doc API
  public bookDoc(data: any) {
    return this.http.post(`${environment.BASE_URL}doc_booking`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Book API (general)
  public book(data: any) {
    return this.http.post(`${environment.BASE_URL}pwc_booking`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Additional methods follow similar patterns for different APIs

  // Get Sit API
  public getSit() {
    return this.http.get(`${environment.BASE_URL}babysit`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Care API
  public getCare() {
    return this.http.get(`${environment.BASE_URL}babycare`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Neo API
  public getNeo() {
    return this.http.get(`${environment.BASE_URL}babyneo`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Lact API
  public getLact() {
    return this.http.get(`${environment.BASE_URL}lact`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Radi API
  public getRadi() {
    return this.http.get(`${environment.BASE_URL}radi`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Bfs API
  public getBfs() {
    return this.http.get(`${environment.BASE_URL}bfs`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Nd API
  public getNd() {
    return this.http.get(`${environment.BASE_URL}nd`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Gyn API
  public getGyn() {
    return this.http.get(`${environment.BASE_URL}gyn`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Spec API
  public getSpec() {
    return this.http.get(`${environment.BASE_URL}specialization`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get User API
  public getUser() {
    return this.http.get(`${environment.BASE_URL}user`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Item Detail API
  public getItemDetail(data: any) {
    return this.http.post(`${environment.BASE_URL}edit`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Doctors API
  public getDoctors(data: any) {
    return this.http.post(`${environment.BASE_URL}doctorspecialization`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Idoctors API
  public getIdoctors(data: any) {
    return this.http.post(`${environment.BASE_URL}details`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Specific Detail API
  public getSpecaizeDetail(data: any) {
    return this.http.post(`${environment.BASE_URL}preg_spec`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Specific Detail 12 API
  public getSpecaizeDetail12(data: any) {
    return this.http.post(`${environment.BASE_URL}preg12`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Pt Detail API
  public getPtDetail(data: any) {
    return this.http.post(`${environment.BASE_URL}preg_pt`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Pregnancy Doctors API
  public getPregDoctors(data: any) {
    return this.http.post(`${environment.BASE_URL}pregdoctorspecialization`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Pregnancy Care API
  public getPregcare(data: any) {
    return this.http.get(`${environment.BASE_URL}preg12`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Pregnancy Care 1 API
  public getPregcare1() {
    return this.http.get(`${environment.BASE_URL}preg1`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Pregnancy Speca API
  public getPregSpeca() {
    return this.http.get(`${environment.BASE_URL}preg2`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Post Pregnancy Data API
  public pregData(data: any) {
    return this.http.post(`${environment.BASE_URL}pregcare`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Book Pregnancy API
  public bookPreg(data: any) {
    return this.http.post(`${environment.BASE_URL}pwc_booking`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Therapy API
  public getTherapy() {
    return this.http.get<any>(Urls.THERAPY1).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Therapy Types API
  public getTherapyTypes(data: any) {
    return this.http.post(`${environment.BASE_URL}add`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Post Items API
  public postItems(data: any) {
    return this.http.post(`${environment.BASE_URL}reh_booking`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Blood Group API
  public getbludgrp() {
    return this.http.get<any>(Urls.Blud1).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Blood Group 1 API
  public getbludgrp1() {
    return this.http.get<any>(Urls.Blud2).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Dispatch API
  public getdispatch() {
    return this.http.get(`${environment.BASE_URL}blud3`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Post Blood Items API
  public BloodItems(data: any) {
    return this.http.post(`${environment.BASE_URL}blood_bank_request_booking`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Post Blood Donor API
  public Blooddonor(data: any) {
    return this.http.post(`${environment.BASE_URL}blood_donor_book`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Situation Names API
  public situationnames() {
    return this.http.get(`${environment.BASE_URL}amb1`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Situation Names 1 API
  public situationnames1() {
    return this.http.get(`${environment.BASE_URL}amb2`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Situation Names 2 API
  public situationnames2() {
    return this.http.get(`${environment.BASE_URL}amb3`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Cause Names API
  public causenames() {
    return this.http.get(`${environment.BASE_URL}amb4`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Ambemer API
  public ambemer() {
    return this.http.get(`${environment.BASE_URL}gyn1`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Book Ambulance API
  public Bookambulance(data: any) {
    return this.http.post(`${environment.BASE_URL}amb_booking`, data, { responseType: 'text' }).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Item Detail 2 API
  public getItemDetail2(data: any) {
    return this.http.post(`${environment.BASE_URL}edit2`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Item Detail 1 API
  public getItemDetail1(data: any) {
    return this.http.post(`${environment.BASE_URL}edit1`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Item Detail 3 API
  public getItemDetail3(data: any) {
    return this.http.post(`${environment.BASE_URL}edit3`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Item Detail 4 API
  public getItemDetail4(data: any) {
    return this.http.post(`${environment.BASE_URL}edit4`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Item Detail 5 API
  public getItemDetail5(data: any) {
    return this.http.post(`${environment.BASE_URL}edit5`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Physio Types API
  public getPhysioTypes(data: any) {
    return this.http.post(`${environment.BASE_URL}add1`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Post Physio Items API
  public postItemsp(data: any) {
    return this.http.post(`${environment.BASE_URL}physio_booking`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Physio API
  public getPhysio() {
    return this.http.get<any>(Urls.PHYSIOT).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get Physio 1 API
  public getPhysio1() {
    return this.http.get<any>(Urls.PHYSIOT1).pipe(
      catchError(error => throwError(error))
    );
  }

  // Get User Items API
  public userItems() {
    return this.http.get(`${environment.BASE_URL}booking_all_tables`).pipe(
      catchError(error => throwError(error))
    );
  }

  // Family Items API
  public familyItems(data: any) {
    return this.http.post(`${environment.BASE_URL}family_details`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // Usernames API
  public usernames(data: any) {
    return this.http.post(`${environment.BASE_URL}family_username`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  // All Bookings APIs
  public allbookings(data: any) {
    return this.http.post(`${environment.BASE_URL}userdetailsone`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  public allbookings1(data: any) {
    return this.http.post(`${environment.BASE_URL}userdetailsone1`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  public allbookings2(data: any) {
    return this.http.post(`${environment.BASE_URL}userdetailsone2`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  public allbookings3(data: any) {
    return this.http.post(`${environment.BASE_URL}userdetailsone3`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  public allbookings4(data: any) {
    return this.http.post(`${environment.BASE_URL}userdetailsone4`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  public allbookings5(data: any) {
    return this.http.post(`${environment.BASE_URL}userdetailsone5`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  public allbookings6(data: any) {
    return this.http.post(`${environment.BASE_URL}userdetailsone6`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  public allbookings7(data: any) {
    return this.http.post(`${environment.BASE_URL}userdetailsone7`, data).pipe(
      catchError(error => throwError(error))
    );
  }

  public allbookings8(data: any) {
    return this.http.post(`${environment.BASE_URL}userdetailsone8`, data).pipe(
      catchError(error => throwError(error))
    );
  }

}
