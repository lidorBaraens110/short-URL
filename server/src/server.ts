import express,{Application,Request,Response,NextFunction} from 'express';
import dotenv,{DotenvConfigOutput,DotenvConfigOptions} from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/ShortUrl';
dotenv.config();

const port = process.env.PORT || 5000;

const app:Application=express();


app.use(express.json());
app.use(cors());

app.use('/api', routes);

const uri= process.env.ATLAS_URI!

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log('connect mongo')).catch(err => console.log(err))

app.listen(5000,()=>console.log('server running on port 5000'))



