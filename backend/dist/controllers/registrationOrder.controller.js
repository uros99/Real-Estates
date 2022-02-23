"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationOrderController = void 0;
const registrationOrder_1 = __importDefault(require("../models/registrationOrder"));
const user_1 = __importDefault(require("../models/user"));
class RegistrationOrderController {
    constructor() {
        this.createRegistrationOrder = (req, res) => {
            let registrationOrder = new registrationOrder_1.default(req.body);
            registrationOrder.save().then(registrationOrder => {
                res.status(200).json({ message: 'user added' });
            }).catch(err => {
                res.status(400).json({ err: 'error' });
            });
        };
        this.getAllRegistrationOrders = (req, res) => {
            registrationOrder_1.default.find({}, (err, order) => {
                if (err)
                    res.json(err);
                else
                    res.json(order);
            });
        };
        this.approveRegistration = (req, res) => {
            let user = new user_1.default(req.body);
            let username = req.body.username;
            user.save().then(user => {
                registrationOrder_1.default.deleteOne({ username: username }, (err) => {
                    res.status(200).json({ status: 200 });
                });
            }).catch(err => {
                res.status(400).json({ status: 400 });
            });
        };
        this.rejectRegistration = (req, res) => {
            let username = req.body.username;
            registrationOrder_1.default.deleteOne({ username: username }, (err) => {
                if (err)
                    res.json({ status: 400 });
                else
                    res.json({ status: 200 });
            });
        };
    }
}
exports.RegistrationOrderController = RegistrationOrderController;
//# sourceMappingURL=registrationOrder.controller.js.map