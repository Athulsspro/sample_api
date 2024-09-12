console.log("print success")

const express = require('express');
const app = express();
const port = 3000;

const {addNumbers, productsNumbers, nestedArray, counts} = require('./src_js/transformations')

// add middleware parse Json bodies
app.use(express.json());

//add route
app.get('/',(req,res)=>{
    res.send("Welcome to colours")
})

//add another route 
app.get('/api',(req,res)=>{
    res.send({message:"api created"})
})

// POST route
app.post('/api/data', (req, res) => {
    const { name } = req.body;
  
    // Simple validation
    if (!name) {
      return res.status(400).json({ error: 'Name are required' });
    }
  
    // Example response
    res.status(201).json({
      message: 'Data received successfull',
      data: {
        name
      }
    });
  });

app.listen(port,()=>{
    console.log(`servers is running on http:\\localhost:${port}`)
})

console.log(addNumbers, "addNumbers")
console.log(productsNumbers, "productsNumbers")
console.log(nestedArray, "nestedArray")
console.log(counts, "counts")

/** server created by http in nodejs */

// const http = require('http')
// const port = 3000;

// const server =http.createServer((req,res)=>{
//     res.write("api check")
//     res.end("")
// })

// server.listen(port,()=>{
//     console.log(`server listening to port http://localhost:${port}`)
// })