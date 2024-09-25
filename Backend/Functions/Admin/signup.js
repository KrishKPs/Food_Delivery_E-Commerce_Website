const generateJWT = require("../../MiddleWare/generatejwt");
const { admin } = require("../../db");
const { userSchema } = require("../../type");


   async function AdminSignup (req,res) {

    const person = req.body;  
    const safeperson = userSchema.safeParse(person);        

    if(!safeperson.success) {
        return res.status(400).json({message : 'Invalid data'}); 
    } 

    await admin.create({
        username : person.username, 
        email : person.email,   
        password : person.password
    }) 

    const token = generateJWT(person); 

    res.json ({
        msg: "Admin Created SuccessFully" , 
        token : token    
    })   


   }

   module.exports = AdminSignup;    