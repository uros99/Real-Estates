import express from 'express';
import { AgencyController } from '../controllers/agency.controller';

const agencyRouter = express.Router();

agencyRouter.route('/agencies').get((req,res) => {
    new AgencyController().getAllAgencies(req,res);
})

agencyRouter.route('/agency-by-name').get((req,res) => {
    new AgencyController().getAgency(req,res);
})

agencyRouter.route('/register').post((req,res) => {
    new AgencyController().register(req,res);
})

export default agencyRouter;