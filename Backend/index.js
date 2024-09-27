require('dotenv').config(); 
const express = require('express');  
const app = express(); 
const cors = require('cors');    
const PORT = process.env.PORT || 3000; 

const mainRouter = require('./Routes/index');   
const db = require('./db');  

const corsOptions = {
    origin: 'https://frontend-swart-tau-69.vercel.app/', // Your Vercel frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };

app.use(express.json());   
app.use(cors(corsOptions)); 

app.use('/foodapp' , mainRouter)
app.get ('/' , function (req,res) {
    res.send('Hello World')  ; 
} )



app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});  