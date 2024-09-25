const { userorder } = require("../../db");

async function allhistroy (req,res) {  

    const user = req.username; 



    const orderhistory = await userorder.find({  'orders.status'  : 'Pending' });

    const pendingorders = orderhistory.map((order) => {

            const filter = order.orders.filter((order) => order.status === 'Pending');   

            return (
                {
                    username : order.username, 
                    orders : filter
                }   
            );
    });

   res.json({
       msg : 'Order Found', 
       order : pendingorders
   });       
}

module.exports = allhistroy; 