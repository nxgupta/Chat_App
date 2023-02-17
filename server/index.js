import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config(); // invoking process
let app=express();
const {MONGO_URI,PORT}=process.env;

app.use(cors());

let start=async()=>{
try{
    mongoose.set('strictQuery',false);
    await mongoose.connect(MONGO_URI)
    app.listen(PORT,()=>console.log(`listening on port ${PORT}`))
}
catch(error){
    console.log(error.message)
}
}
start();