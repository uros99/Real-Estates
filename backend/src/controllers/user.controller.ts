import * as express from 'express';
import User from '../models/user';

export class UserController {
    login = (req : express.Request, res : express.Response) => {
        const username = req.body.username;
        const password = req.body.password;

        User.findOne({username : username, password : password}, (err, user) => {
            if(err) res.status(400).json(err);
            else res.status(200).json(user);
        });
    }

    getAllUsers = (req : express.Request, res : express.Response) => {
        User.find({}, (err, users) => {
            if(err) res.json(err);
            else res.json(users);
        });
    }

    updateUser = (req : express.Request, res : express.Response) => {
        User.updateOne({username : req.body.user}, req.body, (err, user)=>{
            if(err) res.json({status : 400});
            else res.json({status : 200});
        })
    }

    deleteUser = (req : express.Request, res : express.Response) => {
        User.deleteOne({username : req.body.username}, (err)=>{
            if(!err){
                res.json({status : 200})
            }else{
                res.json({status : 400})
            }

        })
    }
}