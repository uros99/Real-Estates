"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import bodyParser from 'body-parser';
const mongoose_1 = __importDefault(require("mongoose"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const realEstate_routes_1 = __importDefault(require("./routes/realEstate.routes"));
const order_routes_1 = __importDefault(require("./routes/order.routes"));
const agency_routes_1 = __importDefault(require("./routes/agency.routes"));
const location_routes_1 = __importDefault(require("./routes/location.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(bodyParser.json());
mongoose_1.default.connect('mongodb://localhost:27017/real_estate');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('db connection ok...');
});
const router = express_1.default.Router();
router.use('/user', user_routes_1.default);
router.use('/real-estate', realEstate_routes_1.default);
router.use('/order', order_routes_1.default);
router.use('/agency', agency_routes_1.default);
router.use('/location', location_routes_1.default);
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map