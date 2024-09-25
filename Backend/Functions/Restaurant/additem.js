const { menu, restaurant } = require("../../db");
const { itemSchema } = require("../../type");

async function additem (req,res) {

    const item = req.body;  
    const username = req.username;    
    const safedata = itemSchema.safeParse(item);   
    console.log(username); 

    if (!safedata.success) {
        return res.status(400).json({ message: 'Invalid data' });
    }    

    const restaurantExists = await restaurant.findOne({ username:   username })  

    if (!restaurantExists) {
        return res.status(400).json({ message: 'Restaurant not found' });
    }   

    try {

        const Item = await menu.create({
            restaurant : restaurantExists._id,  
            restroname : restaurantExists.username,  
            name : item.name, 
            image: item.image,   
            price : item.price,
            description : item.description       
          }); 
      
      
     await restaurant.updateOne ({ username : username }, { $push : { menu : Item._id }});        
      
      
          res.json({
              msg: 'Item Added', 
              Item: Item    
          });     
      



    } catch (error) {
        return res.status(400).json({ message: error }); } 
   
}

module.exports = additem;    





       