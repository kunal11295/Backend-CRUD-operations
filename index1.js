import express from "express";
import mongoose, { mongo } from "mongoose";
import morgan from "morgan";
import router from "./routes/crudroutes";

const app = express;

app.use(morgan('dev'));
app.use(express.json());
app.use('api/v1',router);

mongoose.connect("")
.then(()=> console.log("Db connected"))
.catch((err) => console.log("Db error =>",err));
