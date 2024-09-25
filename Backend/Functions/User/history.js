const { userorder } = require("../../db");

async function histroy (req,res) {  

    const user = req.username; 



    const orderhistory = await userorder.find({ username : user ,  'orders.status'  : 'Completed' });

      const completedorders = orderhistory.map((order) => {

        const filter = order.orders.filter((order) => order.status === 'Completed');     


        return (
            {
                username : order.username, 
                orders : filter
            }   
        ); 
      });

   res.json({
       msg : 'Order Found', 
       order : completedorders
   });       
}

module.exports = histroy; 