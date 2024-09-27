const zod = require('zod');          

const userSchema = zod.object({ 

    username : zod.string().min(3),
    email : zod.string().email(),
    adress : zod.string() , 
    password : zod.string().min(6)
})

const restaurantSchema = zod.object({

    username : zod.string().min(3), 
    image : zod.string().url(),        
    category : zod.string(), 
    adress : zod.string().min(3).max(100),  
    number : zod.string().min(10).max(10), 
    menu : zod.array(zod.string()).optional()       
})

const itemSchema = zod.object({

    name : zod.string().min(3),
    price : zod.number().min(0),
    image : zod.string().url(),  
    description : zod.string().min(3).max(100)
}) 

const adminSchema = zod.object({ 

    username : zod.string().min(3),
    email : zod.string().email(),
    password : zod.string().min(6)
})



module.exports = {
    userSchema : userSchema, 
    restaurantSchema : restaurantSchema, 
    itemSchema : itemSchema , 
    adminSchema : adminSchema   
}