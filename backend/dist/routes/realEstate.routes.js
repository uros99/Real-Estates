"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const realEstate_controller_1 = require("../controllers/realEstate.controller");
const realEstateRouter = express_1.default.Router();
realEstateRouter.route('/real-estate-username').get((req, res) => {
    new realEstate_controller_1.RealEstateController().getRealEstateByUsername(req, res);
});
realEstateRouter.route('/real-estates').get((req, res) => {
    new realEstate_controller_1.RealEstateController().getAllRealEstates(req, res);
});
realEstateRouter.route('/real-estate-id').get((req, res) => {
    new realEstate_controller_1.RealEstateController().getRealEstate(req, res);
});
realEstateRouter.route('/unsold-real-estates').get((req, res) => {
    new realEstate_controller_1.RealEstateController().getUnSoldRealEstates(req, res);
});
realEstateRouter.route('/register').post((req, res) => {
    new realEstate_controller_1.RealEstateController().register(req, res);
});
realEstateRouter.route('/edit').post((req, res) => {
    new realEstate_controller_1.RealEstateController().edit(req, res);
});
realEstateRouter.route('/sell').post((req, res) => {
    new realEstate_controller_1.RealEstateController().sell(req, res);
});
realEstateRouter.route('/search').post((req, res) => {
    new realEstate_controller_1.RealEstateController().search(req, res);
});
exports.default = realEstateRouter;
//# sourceMappingURL=realEstate.routes.js.map