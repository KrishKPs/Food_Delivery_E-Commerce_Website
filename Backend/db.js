const mongoose = require('mongoose');    

mongoose.connect(process.env.MONGO_URL)
.then(() => { console.log('Connected to MongoDB')})      
.catch((err) => { console.log(err) });   


const userSchema = mongoose.Schema({ 

    username : {
        type : String,
        required : true
    },  
    email : {
        type : String,
        required : true
    },
    adress : {
        type : String,
        required : true
    },  
    
    password : {
        type : String,
        required : true  
    }
  })

  const RestaurantSchema = mongoose.Schema({

    username : {
        type : String,
        required : true
    },

    image : {
        type : String,
        required : true

    }, 

    adress: {

        type : String,
        required : true



    }, 

    category : {
        type : String,
        required : true
    },  
    number : {

        type : String,  
        required : true 
     }, 

    menu : [{
        type : mongoose.Schema.Types.ObjectId,  
        ref : 'Menu'    
    }]

  })

  const MenuSchema = mongoose.Schema({ 


      restaurant : {

        type : String,
        ref : 'Restaurant', 
        required : true  
      }, 
      restroname : {
            type : String,
            required : true
      }, 

    name: {
        type : String,
        required : true
    }, 
    
    image : {
        type : String,
        required : true
    }, 
        
    price : {
        type : Number,
        required : true
    },   
    description : {
        type : String,
        required : true
    }, 
} 
   )

   const UserOrderSchema = mongoose.Schema({

    username : {
        type : String,
        required : true,
        ref : 'User'     

    }, 

    orders : [{
       restaurant : {
           type : String,
           required : true
       },
       items: [{
        foodItem: { 
            type: String, 
        },
        quantity: {
            type: Number,
            required: true  
        }
    }],
       price : {
           type : Number,
           required : true
       }, 

       status : {
           type : String,
           default : 'Pending' 
       } 
       
    }]
   })


   const AdminSchema = mongoose.Schema ({

    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }

   })

const user = mongoose.model('User', userSchema);    
const restaurant = mongoose.model('Restaurant', RestaurantSchema);       
const menu = mongoose.model('Menu', MenuSchema);   
const userorder = mongoose.model('UserOrder', UserOrderSchema);        
const admin = mongoose.model('Admin', AdminSchema);  



module.exports = {
    user : user , 
    restaurant : restaurant,
    menu : menu, 
    userorder : userorder    , 
    admin : admin    

}