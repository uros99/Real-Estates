"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registrationOrder_controller_1 = require("../controllers/registrationOrder.controller");
const registrationOrderRouter = express_1.default.Router();
registrationOrderRouter.route('/order-registration').post((req, res) => {
    new registrationOrder_controller_1.RegistrationOrderController().createRegistrationOrder(req, res);
});
registrationOrderRouter.route('/get-all-registration-orders').get((req, res) => {
    new registrationOrder_controller_1.RegistrationOrderController().getAllRegistrationOrders(req, res);
});
registrationOrderRouter.route('/approve').post((req, res) => {
    new registrationOrder_controller_1.RegistrationOrderController().approveRegistration(req, res);
});
registrationOrderRouter.route('/reject').post((req, res) => {
    new registrationOrder_controller_1.RegistrationOrderController().rejectRegistration(req, res);
});
exports.default = registrationOrderRouter;
//# sourceMappingURL=order.routes.js.map