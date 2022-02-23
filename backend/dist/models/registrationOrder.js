"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let RegistrationOrder = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    city: {
        type: String
    },
    birthDate: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String
    },
    profileImage: {
        type: String
    },
    agency: {
        type: String
    },
    licenseId: {
        type: Number
    },
    customerType: {
        type: String
    },
    accepted: {
        type: Boolean
    }
});
exports.default = mongoose_1.default.model('RegistrationOrder', RegistrationOrder, 'registration_order');
//# sourceMappingURL=registrationOrder.js.map