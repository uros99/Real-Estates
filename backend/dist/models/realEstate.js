"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let RealEstate = new Schema({
    name: {
        type: String
    },
    city: {
        type: String
    },
    municipality: {
        type: String
    },
    microlocation: {
        type: String
    },
    street: {
        type: String
    },
    area: {
        type: Number
    },
    rooms: {
        type: Number
    },
    constructionYear: {
        type: Date
    },
    state: {
        type: String
    },
    heating: {
        type: Array
    },
    floor: {
        type: Number
    },
    totalFloors: {
        type: Number
    },
    parking: {
        type: Boolean
    },
    monthlyUtilities: {
        type: Number
    },
    price: {
        type: Number
    },
    about: {
        type: String
    },
    characteristics: {
        type: Array
    },
    sold: {
        type: Boolean
    },
    images: {
        type: Array
    },
    advertiser: {
        type: Array
    },
    type: {
        type: String
    },
    username: {
        type: String
    },
    modifyDate: {
        type: Date
    }
});
exports.default = mongoose_1.default.model('RealEstate', RealEstate, 'real_estates');
//# sourceMappingURL=realEstate.js.map