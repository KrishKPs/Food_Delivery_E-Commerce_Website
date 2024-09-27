require('dotenv').config(); 
const express = require('express');  
const app = express(); 
const cors = require('cors');    
const PORT = process.env.PORT || 3000; 

const mainRouter = require('./Routes/index');   
const db = require('./db');  

const corsOptions = {
    origin: 'https://frontend-fprdpksck-krish-patels-projects-3e6b9326.vercel.app/', // Replace with your frontend URL
    optionsSuccessStatus: 200
};

app.use(express.json());   
// app.use(cors());  
app.use(cors(corsOptions)); 

app.use('/foodapp' , mainRouter)
app.get ('/' , function (req,res) {
    res.send('Hello World')  ; 
} )



app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});  