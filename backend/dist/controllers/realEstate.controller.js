"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateController = void 0;
const realEstate_1 = __importDefault(require("../models/realEstate"));
class RealEstateController {
    constructor() {
        this.getRealEstateByUsername = (req, res) => {
            realEstate_1.default.find({ username: req.query.param }, (err, realEstates) => {
                if (err)
                    res.json(err);
                else
                    res.json(realEstates);
            });
        };
        this.getAllRealEstates = (req, res) => {
            realEstate_1.default.find({}, (err, realEstates) => {
                if (err)
                    res.json(err);
                else
                    res.json(realEstates);
            });
        };
        this.getRealEstate = (req, res) => {
            realEstate_1.default.findOne({ _id: req.query.param }, (err, realEstates) => {
                if (err)
                    res.json(err);
                else
                    res.json(realEstates);
            });
        };
        this.getUnSoldRealEstates = (req, res) => {
            realEstate_1.default.find({ sold: false }, (err, realEstates) => {
                if (err)
                    res.json(err);
                else
                    res.json(realEstates);
            });
        };
        this.register = (req, res) => {
            let realEstate = new realEstate_1.default(req.body);
            realEstate.save().then(user => {
                res.status(200).json({ status: 200 });
            }).catch(err => {
                res.status(400).json({ status: 400 });
            });
        };
        this.edit = (req, res) => {
            realEstate_1.default.updateOne({ _id: req.body.id }, req.body, (err, realEstate) => {
                if (err)
                    res.json({ status: 400 });
                else
                    res.json({ status: 200 });
            });
        };
        this.sell = (req, res) => {
            realEstate_1.default.updateOne({ _id: req.body.id }, { sold: true }, (err, realEstate) => {
                if (err)
                    res.json({ status: 400 });
                else
                    res.json({ status: 200 });
            });
        };
        this.search = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const cities = req.body.cities;
            const municipalities = req.body.municipalities;
            const microlocations = req.body.microlocations;
            const priceTo = req.body.price;
            const squareFootageFrom = req.body.squareFootage;
            const type = req.body.type;
            const rooms = req.body.rooms;
            let realEstates = [];
            yield realEstate_1.default.find({ type: type }, (err, results) => {
                realEstates = realEstates.concat(results);
            });
            if (rooms) {
                realEstates = realEstates.filter((realEstate) => {
                    var _a;
                    return ((_a = realEstate.toObject()) === null || _a === void 0 ? void 0 : _a.rooms) >= Number(rooms);
                });
            }
            if (priceTo) {
                realEstates = realEstates.filter((realEstate) => {
                    var _a;
                    return ((_a = realEstate.toObject()) === null || _a === void 0 ? void 0 : _a.price) < Number(priceTo);
                });
            }
            if (squareFootageFrom) {
                realEstates = realEstates.filter((realEstate) => {
                    var _a;
                    return ((_a = realEstate.toObject()) === null || _a === void 0 ? void 0 : _a.area) >= Number(squareFootageFrom);
                });
            }
            if (cities) {
                realEstates = realEstates.filter((realEstate) => {
                    var _a;
                    for (let ind = 0; ind < cities.length; ind++) {
                        if (((_a = realEstate.toObject()) === null || _a === void 0 ? void 0 : _a.city) === cities[ind]) {
                            return true;
                        }
                    }
                    return false;
                });
            }
            if (municipalities) {
                realEstates = realEstates.filter((realEstate) => {
                    var _a;
                    for (let ind = 0; ind < municipalities.length; ind++) {
                        if (((_a = realEstate.toObject()) === null || _a === void 0 ? void 0 : _a.municipality) === municipalities[ind]) {
                            return true;
                        }
                    }
                    return false;
                });
            }
            if (microlocations) {
                realEstates = realEstates.filter((realEstate) => {
                    var _a;
                    for (let ind = 0; ind < microlocations.length; ind++) {
                        if (((_a = realEstate.toObject()) === null || _a === void 0 ? void 0 : _a.microlocation) === microlocations[ind]) {
                            return true;
                        }
                    }
                    return false;
                });
            }
            res.json(realEstates);
        });
    }
}
exports.RealEstateController = RealEstateController;
//# sourceMappingURL=realEstate.controller.js.map