console.log("Hello")

import express  from 'express';
import {add, product, nestedData, counts } from './helpers/tranformations'
import { getCollection } from "./helpers/mongodbconnection";
const app = express();

const port = 3000

// add middleware parse Json bodies
app.use(express.json());

//add route
app.get('/',(req,res)=>{
    res.send("Hello Team")
})

//add another route
app.get('/api',(req,res)=>{
    res.send({message:"Print the message success"})
})

//Post method using
app.post('/dataTransfer',(req,res)=>{
    const { name } = req.body
    if(!name) res.status(401).json({error:"Name required"})
        else res.send({"name is":name})
})

app.post('/details',(req,res)=>{
const details =req.body 
    if(!details) {res.status(401).json({message:"no data"})}
    else{
      let result = getCollection('Details').insertOne(details)
      if(!result) res.send(401).json({'message':"details not inserted"})
        else res.send({message:'sucessfully inserted'})
    }

})
app.listen(port,()=>{
console.log(`Server listening to http://localhost:${port}`)
})

console.log(add(), "addNumbers")
console.log(product(), "productsNumbers")
console.log(nestedData(), "nestedArray")
console.log(counts(), "countss")