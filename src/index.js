import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();

//USING THE APPROACH ONE : where all the components including database connectivity and express module is written in the same file

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log('ERR : ', error);
            throw error;

        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`);


        })
        
    } catch(error) {
        console.error('ERROR : ', error);
        throw error
    }
    )
})()