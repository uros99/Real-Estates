import mongoose from "mongoose";

const Schema = mongoose.Schema;

let User = new Schema({
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
    }
})

export default mongoose.model('User', User, 'users');