import express from 'express';
import { RegistrationOrderController } from '../controllers/registrationOrder.controller';

const registrationOrderRouter = express.Router();

registrationOrderRouter.route('/order-registration').post((req, res)=>{
    new RegistrationOrderController().createRegistrationOrder(req, res);
})

registrationOrderRouter.route('/get-all-registration-orders').get((req,res) => {
    new RegistrationOrderController().getAllRegistrationOrders(req,res);
})

registrationOrderRouter.route('/approve').post((req,res) => {
    new RegistrationOrderController().approveRegistration(req,res);
})

registrationOrderRouter.route('/reject').post((req,res) => {
    new RegistrationOrderController().rejectRegistration(req,res);
})

export default registrationOrderRouter;