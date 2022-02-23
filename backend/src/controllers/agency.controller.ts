import * as express from 'express';
import Agency from '../models/agency';

export class AgencyController {
    getAllAgencies = (req : express.Request, res : express.Response) => {
        Agency.find({}, (err, agencies) => {
            if(err) res.json(err);
            else res.json(agencies);
        });
    }

    register = (req : express.Request, res : express.Response) => {
        let agency = new Agency(req.body);

        agency.save().then( user => {
            res.status(200).json({status : 200});
        }).catch(err=>{
            res.status(400).json({status : 400});
        })
    }

    getAgency = (req : express.Request, res : express.Response) => {
        Agency.findOne({name : req.query.param}, (err, agency) => {
            if(err) res.json(err);
            else res.json(agency);
        });
    }
}