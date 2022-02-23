import express from 'express';
import { RealEstateController } from '../controllers/realEstate.controller';

const realEstateRouter = express.Router();

realEstateRouter.route('/real-estate-username').get((req,res) => {
    new RealEstateController().getRealEstateByUsername(req,res);
})

realEstateRouter.route('/real-estates').get((req,res) => {
    new RealEstateController().getAllRealEstates(req,res);
})

realEstateRouter.route('/real-estate-id').get((req,res) => {
    new RealEstateController().getRealEstate(req,res);
})

realEstateRouter.route('/unsold-real-estates').get((req,res) => {
    new RealEstateController().getUnSoldRealEstates(req,res);
})

realEstateRouter.route('/register').post((req,res) => {
    new RealEstateController().register(req,res);
})

realEstateRouter.route('/edit').post((req,res) => {
    new RealEstateController().edit(req,res);
})

realEstateRouter.route('/sell').post((req,res) => {
    new RealEstateController().sell(req,res);
})

realEstateRouter.route('/search').post((req,res) => {
    new RealEstateController().search(req,res);
})


export default realEstateRouter;