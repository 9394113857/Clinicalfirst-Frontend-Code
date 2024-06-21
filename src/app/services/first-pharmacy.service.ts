import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from '../service_url/urls';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirstPharmacyService {

  constructor(private http: HttpClient) { }


  public loginData(data:any) {
    return this.http.post(`${environment.BASE_URL}login01`,data)
  } 

  public signupData(data:any) {
    return this.http.post(`${environment.BASE_URL}patient_signup`,data)
  } 

  public getOppurtunities() {
    return this.http.get<any>(Urls.BSATYPE)  
   }

   public getOppurtunitie() {
    return this.http.get<any>(Urls.NURTYPE)  
   }

   public getOppurtunity() {
    return this.http.get<any>(Urls.NURREC)  
   }

   public getPregstage() {
    return this.http.get<any>(Urls.PREGL)  
   }


   public bookData(data:any) {
    return this.http.post(`${environment.BASE_URL}bsa_booking`,data)
  } 

  
  public bookSitbaby(data:any) {
    return this.http.post(`${environment.BASE_URL}mb_booking`,data)
  } 

  public bpBook(data:any) {
    return this.http.post(`${environment.BASE_URL}test_bsa`,data)
  } 

  public getNurseTypes(data:any) {
    return this.http.post(`${environment.BASE_URL}recnur`,data)
  }
  public bookNur(data:any) {
    return this.http.post(`${environment.BASE_URL}nur_booking`,data)
  } 

  public getItems() {
    return this.http.get(`${environment.BASE_URL}onetime`)
  }
  public bookDoc(data:any) {
    return this.http.post(`${environment.BASE_URL}doc_booking`,data)
  } 

public book(data:any) {
  return this.http.post(`${environment.BASE_URL}pwc_booking`,data)
} 
 

  public getItem1() {
    return this.http.get(`${environment.BASE_URL}subscribe`)
  }

  public getSit() {
    return this.http.get(`${environment.BASE_URL}babysit`)
  }
  public getCare() {
    return this.http.get(`${environment.BASE_URL}babycare`)
  }
  public getNeo() {
    return this.http.get(`${environment.BASE_URL}babyneo`)
  }
  public getLact() {
    return this.http.get(`${environment.BASE_URL}lact`)
  }
  public getRadi() {
    return this.http.get(`${environment.BASE_URL}radi`)
  }
  public getBfs() {
    return this.http.get(`${environment.BASE_URL}bfs`)
  }
  public getNd() {
    return this.http.get(`${environment.BASE_URL}nd`)
  }
  public getGyn() {
    return this.http.get(`${environment.BASE_URL}gyn`)
  }
  public getSpec() {
    return this.http.get(`${environment.BASE_URL}specialization`)
  }
  
  public getUser() {
    return this.http.get(`${environment.BASE_URL}user`)
  }
  public getItemDetail(data:any) {
    return this.http.post(`${environment.BASE_URL}edit`,data)
  }

  public getDoctors(data:any) {
    return this.http.post(`${environment.BASE_URL}doctorspecialization`,data)
  }

  public getIdoctors(data:any) {
    return this.http.post(`${environment.BASE_URL}details`,data)
  }
// pregnancy care
public getSpecaizeDetail(data:any) {
  return this.http.post(`${environment.BASE_URL}preg_spec`,data)
}
public getSpecaizeDetail12(data:any) {
  return this.http.post(`${environment.BASE_URL}preg12`,data)
}

public getPtDetail(data:any) {
  return this.http.post(`${environment.BASE_URL}preg_pt`,data)
}

public getpregDoctors(data:any) {
  return this.http.post(`${environment.BASE_URL}pregdoctorspecialization`,data)
}

public getPregcare(data:any) {
  return this.http.get(`${environment.BASE_URL}preg12`,data)
}
public getPregcare1() {
  return this.http.get(`${environment.BASE_URL}preg1`)
}
public getPregSpeca() {
  return this.http.get(`${environment.BASE_URL}preg2`)
}

public pregData(data:any) {
  return this.http.post(`${environment.BASE_URL}pregcare`,data)
}

public bookPreg(data:any) {
  return this.http.post(`${environment.BASE_URL}pwc_booking`,data)
}
//  nagraju work


// public getItems2() {
//   return this.http.get(`${environment.BASE_URL}preview`)
// }

// Rehabilitation
public getTherapy() {
  return this.http.get<any>(Urls.THERAPY1)
}
public getTherapyTypes(data:any) {
  return this.http.post(`${environment.BASE_URL}add`,data)
}
public postItems(data:any) {
  return this.http.post(`${environment.BASE_URL}reh_booking`,data)
}
// Bloodbank
public getbludgrp() {
  return this.http.get<any>(Urls.Blud1)
}
public getbludgrp1() {
  return this.http.get<any>(Urls.Blud2)
}
public getdispatch() {
  return this.http.get(`${environment.BASE_URL}blud3`)
}
public BloodItems(data:any) {
  return this.http.post(`${environment.BASE_URL}blood_bank_request_booking`,data)
}
public Blooddonor(data:any) {
  return this.http.post(`${environment.BASE_URL}blood_donor_book`,data)
}


// AMBULANCE_SERVICES
public situationnames() {
  return this.http.get(`${environment.BASE_URL}amb1`)
}
public situationnames1() {
  return this.http.get(`${environment.BASE_URL}amb2`)
}
public situationnames2() {
  return this.http.get(`${environment.BASE_URL}amb3`)
}
public causenames() {
  return this.http.get(`${environment.BASE_URL}amb4`)
}
public ambemer() {
  return this.http.get(`${environment.BASE_URL}gyn1`)
}
public Bookambulance(data:any) {
  return this.http.post(`${environment.BASE_URL}amb_booking`,data,   { responseType: 'text' }  )
}
public getItemDetail2(data:any) {
  return this.http.post(`${environment.BASE_URL}edit2`,data)
}
public getItemDetail1(data:any) {
  return this.http.post(`${environment.BASE_URL}edit1`,data)
}
public getItemDetail3(data:any) {
  return this.http.post(`${environment.BASE_URL}edit3`,data)
}
public getItemDetail4(data:any) {
  return this.http.post(`${environment.BASE_URL}edit4`,data)
}
public getItemDetail5(data:any) {
  return this.http.post(`${environment.BASE_URL}edit5`,data)
}




public getPhysioTypes(data:any) {
  return this.http.post(`${environment.BASE_URL}add1`,data)
}
public postItemsp(data:any) {
  return this.http.post(`${environment.BASE_URL}physio_booking`,data)
}
public getPhysio() {
  return this.http.get<any>(Urls.PHYSIOT)
}
public getPhysio1() {
  return this.http.get<any>(Urls.PHYSIOT1)
}

public userItems() {
  return this.http.get(`${environment.BASE_URL}booking_all_tables`)
}
// family members
public familyItems(data:any) {
  return this.http.post(`${environment.BASE_URL}family_details`,data)
}
public usernames(data:any) {
  return this.http.post(`${environment.BASE_URL}family_username`,data)
}
public allbookings(data:any) {
  return this.http.post(`${environment.BASE_URL}userdetailsone`,data)
}
public allbookings1(data:any) {
  return this.http.post(`${environment.BASE_URL}userdetailsone1`,data)
}
public allbookings2(data:any) {
  return this.http.post(`${environment.BASE_URL}userdetailsone2`,data)
}
public allbookings3(data:any) {
  return this.http.post(`${environment.BASE_URL}userdetailsone3`,data)
}
public allbookings4(data:any) {
  return this.http.post(`${environment.BASE_URL}userdetailsone4`,data)
}
public allbookings5(data:any) {
  return this.http.post(`${environment.BASE_URL}userdetailsone5`,data)
}
public allbookings6(data:any) {
  return this.http.post(`${environment.BASE_URL}userdetailsone6`,data)
}
public allbookings7(data:any) {
  return this.http.post(`${environment.BASE_URL}userdetailsone7`,data)
}
public allbookings8(data:any) {
  return this.http.post(`${environment.BASE_URL}userdetailsone8`,data)
}
}
