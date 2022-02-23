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
exports.LocationController = void 0;
const city_1 = __importDefault(require("../models/city"));
const microlocation_1 = __importDefault(require("../models/microlocation"));
const realEstate_1 = __importDefault(require("../models/realEstate"));
class LocationController {
    constructor() {
        this.getCities = (req, res) => {
            city_1.default.find({}, (err, cities) => {
                if (err)
                    res.json(err);
                else
                    res.json(cities);
            });
        };
        this.getMicrolocations = (req, res) => {
            microlocation_1.default.find({}, (err, cities) => {
                if (err)
                    res.json(err);
                else
                    res.json(cities);
            });
        };
        this.getAvgPricePerSquareMeterOnLocationByType = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const type = req.query.type;
            const microlocation = req.query.microlocation;
            let sumAvg = 0;
            let avg = 0;
            let realEstates = [];
            yield realEstate_1.default.find({ type: type, microlocation: microlocation }, (err, results) => {
                realEstates = realEstates.concat(results);
            });
            for (let i = 0; i < realEstates.length; i++) {
                sumAvg += ((_a = realEstates[i].toObject()) === null || _a === void 0 ? void 0 : _a.price) / ((_b = realEstates[i].toObject()) === null || _b === void 0 ? void 0 : _b.area);
            }
            avg = sumAvg / realEstates.length;
            res.json({ avgPricePerMeter: avg });
        });
    }
}
exports.LocationController = LocationController;
//# sourceMappingURL=location.controller.js.map