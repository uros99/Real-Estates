import mongoose from "mongoose";

const Schema = mongoose.Schema;

let RegistrationOrder = new Schema({
    firstname : {
        type : String
    },
    lastname : {
        type : String
    },
    username : {
        type : String
    },
    password : {
        type : String
    },
    city : {
        type : String
    },
    birthDate : {
        type : String
    },
    phoneNumber : {
        type : String
    },
    email : {
        type : String
    },
    profileImage : {
        type : String
    },
    agency : {
        type : String
    },
    licenseId : {
        type : Number
    },
    customerType : {
        type : String
    },
    accepted : {
        type : Boolean
    }
})

export default mongoose.model('RegistrationOrder', RegistrationOrder, 'registration_order');