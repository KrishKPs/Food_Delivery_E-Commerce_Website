const generateJWT = require("../../MiddleWare/generatejwt");
const { user } = require("../../db");

async function login (req,res) {

    const person = req.body;     

    const userExits = await user.findOne({ username : person.username})
    if(!userExits) {
        return res.status(400).json({message : 'User not found'}); 
    } 

    const token = generateJWT(person); 

    res.json({
        msg : 'User Found', 
        token : token   
    }); 
}

module.exports = login;  