import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'

dotenv.config();
let app=express();
const {MONGO_URI,PORT}=process.env;

app.use(cors());
app.use(express.json());

app.use('/api/v1',userRoutes)
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