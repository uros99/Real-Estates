import * as express from 'express';
import { Document } from 'mongoose';
import City from '../models/city'; 
import Microlocation from '../models/microlocation';
import RealEstate from '../models/realEstate';

export class LocationController {
    getCities = (req : express.Request, res : express.Response) => {
        City.find({}, (err, cities) => {
            if(err) res.json(err);
            else res.json(cities);
        });
    }

    getMicrolocations = (req : express.Request, res : express.Response) => {
        Microlocation.find({}, (err, cities) => {
            if(err) res.json(err);
            else res.json(cities);
        });
    }

    getAvgPricePerSquareMeterOnLocationByType = async (req : express.Request, res : express.Response) => {
        const type = req.query.type;
        const microlocation = req.query.microlocation;
        
        let sumAvg = 0;
        let avg = 0;
        let realEstates : Document[] = [];

        await RealEstate.find({type : type, microlocation : microlocation}, (err, results)=>{
            realEstates = realEstates.concat(results);
        })

        for(let i = 0; i < realEstates.length; i++){
            sumAvg += realEstates[i].toObject()?.price / realEstates[i].toObject()?.area;
        }

        avg = sumAvg / realEstates.length;

        res.json({avgPricePerMeter : avg})
    }
}