"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgencyController = void 0;
const agency_1 = __importDefault(require("../models/agency"));
class AgencyController {
    constructor() {
        this.getAllAgencies = (req, res) => {
            agency_1.default.find({}, (err, agencies) => {
                if (err)
                    res.json(err);
                else
                    res.json(agencies);
            });
        };
        this.register = (req, res) => {
            let agency = new agency_1.default(req.body);
            agency.save().then(user => {
                res.status(200).json({ status: 200 });
            }).catch(err => {
                res.status(400).json({ status: 400 });
            });
        };
        this.getAgency = (req, res) => {
            agency_1.default.findOne({ name: req.query.param }, (err, agency) => {
                if (err)
                    res.json(err);
                else
                    res.json(agency);
            });
        };
    }
}
exports.AgencyController = AgencyController;
//# sourceMappingURL=agency.controller.js.map