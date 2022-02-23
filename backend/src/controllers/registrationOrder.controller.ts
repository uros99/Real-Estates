import * as express from 'express';
import RegistrationOrder from '../models/registrationOrder';
import User from '../models/user';

export class RegistrationOrderController {

    createRegistrationOrder = (req : express.Request, res : express.Response) => {
        let registrationOrder = new RegistrationOrder(req.body);

        registrationOrder.save().then( registrationOrder => {
            res.status(200).json({message : 'user added'});
        }).catch(err=>{
            res.status(400).json({err : 'error'});
        })
    }
    
    getAllRegistrationOrders = (req : express.Request, res : express.Response) => {
        RegistrationOrder.find({}, (err, order) => {
            if(err) res.json(err);
            else res.json(order);
        });
    }

    approveRegistration = (req : express.Request, res : express.Response) => {
        let user = new User(req.body);
        let username = req.body.username;

        user.save().then( user => {
            RegistrationOrder.deleteOne({username : username}, (err)=>{
                res.status(200).json({status : 200});
            });
        }).catch(err=>{
            res.status(400).json({status : 400});
        })
    }

    rejectRegistration = (req : express.Request, res : express.Response) => {
        let username = req.body.username;
        RegistrationOrder.deleteOne({username : username}, (err) => {
            if(err) res.json({status : 400});
            else res.json({status : 200});
        });
    }
}