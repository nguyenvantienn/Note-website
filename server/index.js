
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';


const app = express();
const PORT = process.env.port || 5000;

const urlMongoose = 'mongodb+srv://admin:O8rY3nH2RYLynEWz@cluster0.w6hfgbb.mongodb.net/?retryWrites=true&w=majority';
const NewurlMongoose = 'mongodb+srv://newAdmin:y3YI4J62DGCty2Iy@cluster0.w6hfgbb.mongodb.net/?retryWrites=true&w=majority';
// mk newadmin: y3YI4J62DGCty2Iy
//Su dung midleW
//limit se gioi han toi da dung luong ma phia client co the submit len server
app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended : true , limit :'30mb'}));
app.use(cors());
// app.use('/',cors()) => url localhost:5000/ se apply midleW cors
// Truong hop ko dinh nghia moi url deu chay qua midleW(bodyParser , cors)

app.use('/posts', posts);


const URL='';
mongoose.set("strictQuery", false);
mongoose.connect(NewurlMongoose , { useNewUrlParser : true , useUnifiedTopology : true})
    .then(() => {
        console.log('Connected to DB');
        app.listen(PORT, ()=>{
            console.log(`Server is runing on port ${PORT}`);
        });
    }).catch((err) => {
        console.log('False');
        // console.log('err',err);
    });

