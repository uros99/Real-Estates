import * as express from 'express';
import { Document } from 'mongoose';
import RealEstate from '../models/realEstate';

export class RealEstateController {

    getRealEstateByUsername = (req : express.Request, res : express.Response) => {
        RealEstate.find({username : req.query.param}, (err, realEstates) => {
            if(err) res.json(err);
            else res.json(realEstates);
        });
    }
    
    getAllRealEstates = (req : express.Request, res : express.Response) => {
        RealEstate.find({}, (err, realEstates) => {
            if(err) res.json(err);
            else res.json(realEstates);
        });
    }

    getRealEstate = (req : express.Request, res : express.Response) => {
        RealEstate.findOne({_id : req.query.param}, (err, realEstates) => {
            if(err) res.json(err);
            else res.json(realEstates);
        });
    }

    getUnSoldRealEstates = (req : express.Request, res : express.Response) => {
        RealEstate.find({sold : false}, (err, realEstates) => {
            if(err) res.json(err);
            else res.json(realEstates);
        });
    }

    register = (req : express.Request, res : express.Response) => {
        let realEstate = new RealEstate(req.body);

        realEstate.save().then( user => {
            res.status(200).json({status : 200});
        }).catch(err=>{
            res.status(400).json({status : 400});
        })
    }

    edit = (req : express.Request, res : express.Response) => {
        RealEstate.updateOne({_id : req.body.id}, req.body, (err, realEstate)=>{
            if(err) res.json({status : 400});
            else res.json({status : 200});
        })
    }

    sell = (req : express.Request, res : express.Response) => {
        RealEstate.updateOne({_id : req.body.id}, {sold : true}, (err, realEstate)=>{
            if(err) res.json({status : 400});
            else res.json({status : 200});
        })
    }

    search = async (req : express.Request, res : express.Response) => {
        const cities : [] = req.body.cities;
        const municipalities : [] = req.body.municipalities;
        const microlocations : [] = req.body.microlocations;
        const priceTo = req.body.price;
        const squareFootageFrom = req.body.squareFootage;
        const type = req.body.type;
        const rooms = req.body.rooms;

        let realEstates : Document[] = [];

        await RealEstate.find({type : type}, (err, results)=>{
            realEstates = realEstates.concat(results);
        })

        if(rooms){
            realEstates = realEstates.filter((realEstate)=>{
                return realEstate.toObject()?.rooms >= Number(rooms);
            })
        }

        if(priceTo){
            realEstates = realEstates.filter((realEstate)=>{
                return realEstate.toObject()?.price < Number(priceTo);
            })
        }

        if(squareFootageFrom){
            realEstates = realEstates.filter((realEstate)=>{
                return realEstate.toObject()?.area >= Number(squareFootageFrom);
            })
        }

        if(cities){
            realEstates = realEstates.filter( (realEstate)=>{
                for(let ind = 0; ind < cities.length; ind++){
                    if(realEstate.toObject()?.city === cities[ind]){
                        return true;
                    }
                }
                return false;
            })
        }

        if(municipalities){
            realEstates = realEstates.filter( (realEstate)=>{
                for(let ind = 0; ind < municipalities.length; ind++){
                    if(realEstate.toObject()?.municipality === municipalities[ind]){
                        return true;
                    }
                }
                return false;
            })
        }
        
        if(microlocations){
            realEstates = realEstates.filter( (realEstate)=>{
                for(let ind = 0; ind < microlocations.length; ind++){
                    if(realEstate.toObject()?.microlocation === microlocations[ind]){
                        return true;
                    }
                }
                return false;
            })
        }

        res.json(realEstates);
    }
}