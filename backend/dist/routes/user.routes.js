"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
userRouter.route('/users').get((req, res) => {
    new user_controller_1.UserController().getAllUsers(req, res);
});
userRouter.route('/edit-user').post((req, res) => {
    new user_controller_1.UserController().updateUser(req, res);
});
userRouter.route('/delete-user').post((req, res) => {
    new user_controller_1.UserController().deleteUser(req, res);
});
userRouter.route('/login').post((req, res) => {
    new user_controller_1.UserController().login(req, res);
});
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map