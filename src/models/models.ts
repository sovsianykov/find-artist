
export interface User {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  phone: string;
  avatarUrl?: string;
  instrument?: string;
  hasProfile?: boolean;
  isAuthorized?: boolean;
  age?: number;
}
export  const initialUser = {
    firstName: "",
    lastName: "",
    country: "",
    city:"",
    phone:"",
    avatarUrl : "",
    instrument: "",
    hasProfile: false,
    isAuthorized: false,
    age: 0
}
 export interface Users {
     users : User[];

 }