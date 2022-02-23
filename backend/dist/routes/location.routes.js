"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const location_controller_1 = require("../controllers/location.controller");
const locationRouter = express_1.default.Router();
locationRouter.route('/cities').get((req, res) => {
    new location_controller_1.LocationController().getCities(req, res);
});
locationRouter.route('/microlocations').get((req, res) => {
    new location_controller_1.LocationController().getMicrolocations(req, res);
});
locationRouter.route('/avg-price-pet-meter-on-location-by-type').get((req, res) => {
    new location_controller_1.LocationController().getAvgPricePerSquareMeterOnLocationByType(req, res);
});
exports.default = locationRouter;
//# sourceMappingURL=location.routes.js.map