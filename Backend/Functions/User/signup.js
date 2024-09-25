const generateJWT = require("../../MiddleWare/generatejwt");
const { user, userorder } = require("../../db");
const { userSchema } = require("../../type");

async function signup (req,res) {

    const person = req.body; 
    const safeperson = userSchema.safeParse(person);     

    if(!safeperson.success) {
        return res.status(400).json({message : 'Invalid data'}); 
    } 

    await user.create({
        username : person.username, 
        email : person.email,   
        password : person.password
    })

    const token = generateJWT(person); 

    await userorder.create({

        username : person.username, 
        orders : []  
    }); 

    res.json ({
        msg: "User Created SuccessFully" , 
        token : token    
    })


}

module.exports = signup;     