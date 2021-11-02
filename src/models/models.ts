

export interface User {
    id: string;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  phone: string;
  avatarUrl?: string;
  instrument?: string;
  hasProfile?: string ;
  isAuthorized?: string;
  age?: number;
  description?: string;
}
export  const initialUser = {
    id: "first",
    firstName: "",
    lastName: "",
    country: "",
    city:"",
    phone:"",
    avatarUrl : "",
    instrument: "",
    hasProfile: '',
    isAuthorized: '',
    description: '',
    age: 0
}
 export interface Users {
     users : User[];

 }