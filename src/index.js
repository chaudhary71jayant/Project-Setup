//require('dotenv').config({path : '/.env'})
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`The app is listening at the server : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDb connection failed!!", err);
});