import mongoose from "mongoose";

const Schema = mongoose.Schema;

let RealEstate = new Schema({
    name : {
        type : String
    },
    city : {
        type : String
    },
    municipality : {
        type : String
    },
    microlocation : {
        type : String
    },
    street : {
        type : String
    },
    area : {
        type : Number
    },
    rooms : {
        type : Number
    },
    constructionYear : {
        type : Date
    },
    state : {
        type : String
    },
    heating : {
        type : Array
    },
    floor : {
        type : Number
    },
    totalFloors : {
        type : Number
    },
    parking : {
        type : Boolean
    },
    monthlyUtilities : {
        type : Number
    },
    price : {
        type : Number
    },
    about : {
        type : String
    },
    characteristics : {
        type : Array
    },
    sold : {
        type : Boolean
    },
    images : {
        type : Array
    },
    advertiser : {
        type : Array
    },
    type : {
        type : String
    },
    username : {
        type : String
    },
    modifyDate : {
        type : Date
    }
})

export default mongoose.model('RealEstate', RealEstate, 'real_estates');