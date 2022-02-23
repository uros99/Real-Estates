import express from 'express';
import { LocationController } from '../controllers/location.controller';

const locationRouter = express.Router();

locationRouter.route('/cities').get((req,res) => {
    new LocationController().getCities(req,res);
})

locationRouter.route('/microlocations').get((req,res) => {
    new LocationController().getMicrolocations(req,res);
})

locationRouter.route('/avg-price-pet-meter-on-location-by-type').get((req,res) => {
    new LocationController().getAvgPricePerSquareMeterOnLocationByType(req,res);
})

export default locationRouter;