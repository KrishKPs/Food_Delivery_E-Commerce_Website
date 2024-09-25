const { menu, userorder, restaurant } = require("../../db");


async function createOrder(req, res) { 


    const {order} = req.body;  
    const restaurants = req.params.id;   
    const user = req.username;   

    const namerender = await restaurant.findOne({ _id: restaurants });

                      


        let price = 0; 
        let orderitems = [];      


           for (const item of order) {

          
            const orderitem = await menu.findOne({ name: item.fooditem, restaurant: restaurants });
 
           

              if (!orderitem) {
                  return res.status(400).json({ message: 'Item not found' }); }  

             price = price + (orderitem.price * item.quantity );

             orderitems.push({
                foodItem : orderitem.name, 
                    quantity : item.quantity
    
             })

           }

           console.log(namerender);  

           const newOrder = {
                restaurant : namerender.username, 
                items : orderitems ,
                price : price, 
                status : 'Pending' 
                
           }


           console.log(user); 
           await userorder.updateOne({ username : user }, { $push : { orders : newOrder }});    
    
              res.json({
                msg: 'Order Created', 
                order: newOrder    
              });     




    


 }

 module.exports = createOrder; 