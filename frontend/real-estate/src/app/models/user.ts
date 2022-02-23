export class User{
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
    profileImage? : string;
}

export namespace User {
    export type UserKindEnum = 'admin' | 'buyer' | 'agent';
    export const UserKindEnum = {
        Admin: 'admin' as UserKindEnum,
        Buyer: 'buyer' as UserKindEnum,
        Agent: 'agent' as UserKindEnum
    }
}