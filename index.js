const express= require('express')
const dotenv =require('dotenv').config();
const port =process.env.PORT || 3000
const colors =require('colors')

const connectDB=require('./config/depositdb')
const app=express();

app.use(express.json());

app.use(express.urlencoded({extended:false}))

app.use('/deposits/v1/api',require('./routes/depositroutes'))

app.listen(port,()=>{console.log(`Server is listening on ${port}...`.yellow.bold.italic.underline)})

connectDB();

console.log(`HELLO USER`.america.bold.italic) 
