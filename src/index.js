// require('dotenv').config({path : './env'})
import dotenv from "dotenv";


// import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectdb from "./db/index.js";

connectdb()




/*
import express from "express"
const app = express()

(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
        app.on("error", (err)=>{
            console.log("errorrr")
            throw err
        })
        app.listen(process.env.PORT, ()=>
        {
            console.log("app has started listening")
        })
    }catch(err){
        console.error(error)
        throw err
    }
})()*/