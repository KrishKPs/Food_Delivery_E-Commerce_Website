const generateJWT = require("../../MiddleWare/generatejwt");
const { restaurant } = require("../../db");
const { restaurantSchema } = require("../../type");

async function restaurantregister (req, res) {
  

    const data = req.body ; 
    const safedata = restaurantSchema.safeParse(data);    
    
    console.log(data);   
    
    if (!safedata.success) {
        return res.status(400).json({ message: 'Invalid data' });
    }    

    await restaurant.create({

        username : data.username, 
        adress : data.adress, 
        image : data.image,  
        category : data.category,       
        number : data.number,     
        menu : []
    }); 


    const token = generateJWT(data);
    
    res.json({
        msg: "Restaurant Created Successfully",
        token: token
    })   

}

module.exports = restaurantregister; 