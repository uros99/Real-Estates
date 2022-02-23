"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
class UserController {
    constructor() {
        this.login = (req, res) => {
            const username = req.body.username;
            const password = req.body.password;
            user_1.default.findOne({ username: username, password: password }, (err, user) => {
                if (err)
                    res.status(400).json(err);
                else
                    res.status(200).json(user);
            });
        };
        this.getAllUsers = (req, res) => {
            user_1.default.find({}, (err, users) => {
                if (err)
                    res.json(err);
                else
                    res.json(users);
            });
        };
        this.updateUser = (req, res) => {
            user_1.default.updateOne({ username: req.body.user }, req.body, (err, user) => {
                if (err)
                    res.json({ status: 400 });
                else
                    res.json({ status: 200 });
            });
        };
        this.deleteUser = (req, res) => {
            user_1.default.deleteOne({ username: req.body.username }, (err) => {
                if (!err) {
                    res.json({ status: 200 });
                }
                else {
                    res.json({ status: 400 });
                }
            });
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map