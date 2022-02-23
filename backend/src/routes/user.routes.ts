import express from 'express';
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.route('/users').get((req,res) => {
    new UserController().getAllUsers(req,res);
})

userRouter.route('/edit-user').post((req, res) => {
    new UserController().updateUser(req, res);
})

userRouter.route('/delete-user').post((req, res) => {
    new UserController().deleteUser(req, res);
})

userRouter.route('/login').post((req,res) => {
    new UserController().login(req,res);
})

export default userRouter;