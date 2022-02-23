import { User } from "./user";

export class RegistrationOrder{
    firstname? : string;
    lastname? : string;
    username? : string;
    password? : string;
    city? : string;
    birthDate? : Date;
    phoneNumber? : string;
    email? : string;
    agency? : string;
    licenseId? : number;
    customerType? : User.UserKindEnum;
    accepted? : boolean;
    profileImage? : string;
}