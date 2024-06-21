import { environment } from "src/environments/environment";

export class Urls {
    
    public static BSATYPE = `${environment.BASE_URL}type`;

    public static NURTYPE = `${environment.BASE_URL}nurtype`;    
   
    public static NURREC = `${environment.BASE_URL}nurrec`; 

    public static PREGL = `${environment.BASE_URL}pregstage`; 

    // nagraj work

        // Rehabilitation
        public static THERAPY1 = `${environment.BASE_URL}type1`;
        // Bloodbank
        public static Blud1 = `${environment.BASE_URL}blud1`;
        public static Blud2 = `${environment.BASE_URL}blud2`;

        public static PHYSIOT = `${environment.BASE_URL}type2`;
        public static PHYSIOT1 = `${environment.BASE_URL}type3`;
 }

