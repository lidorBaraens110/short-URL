"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const ShortUrl_1 = __importDefault(require("./routes/ShortUrl"));
dotenv_1.default.config();
const port = process.env.PORT || 5000;
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use('/api', ShortUrl_1.default);
const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
//     .then(() => console.log('connect mongo')).catch(err => console.log(err))
app.listen(4000, () => console.log(uri));
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('we are connect mongoDB');
});
app.listen(port, () => {
    console.log('we are listening to port : ' + port);
});
