const jwt = require('jsonwebtoken');     


function Authenticate(req,res,next) {

         const token = req.headers.authorization;  
         
         if(!token) {
             return res.status(401).json({message : 'Token not found'}); 
         } 

         try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);    
            req.username = decode ; 
            console.log(decode); 
            console.log(req.username);   
            next();
         }
         
         
         
         catch(err) {
             return res.status(401).json({message : 'Invalid token'}); 
         }   
}

module.exports = Authenticate;   