const generateJWT = require("../../MiddleWare/generatejwt");
const { admin } = require("../../db");



async function AdminLogin (req,res) {

   const person  = req.body; 
   const Exists = await admin.findOne({ username : person.username});    

   if (!Exists) {
       return res.status(400).json({message : 'Admin not found'}); 
   }     


   const token = generateJWT(person);    


    res.json({
         msg : 'Admin Found',
            token : token   
    }); 



}

module.exports = AdminLogin;    