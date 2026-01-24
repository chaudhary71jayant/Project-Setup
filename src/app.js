import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true,
}))

app.use(express.json({limit : "16kb"}))//json limits
app.use(express.urlencoded({extended : true, limit : "16kb"}))//url encode
app.use(express.static("public"))//to serve static files 
app.use(cookieParser())//this will allow us CRUD operations on user cookies


export default app;