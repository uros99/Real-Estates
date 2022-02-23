import express from 'express';
import cors from 'cors';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes';
import realEstateRouter from './routes/realEstate.routes';
import registrationOrderRouter from './routes/order.routes';
import agencyRouter from './routes/agency.routes'
import locationRouter from './routes/location.routes';

const app = express();
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended : true}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/real_estate');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('db connection ok...');
})

const router = express.Router();
router.use('/user', userRouter);
router.use('/real-estate', realEstateRouter);
router.use('/order', registrationOrderRouter);
router.use('/agency', agencyRouter);
router.use('/location', locationRouter);
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));