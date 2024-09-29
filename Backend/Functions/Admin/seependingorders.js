const { userorder, admin } = require("../../db");

async function allhistroy (req,res) {  

    const user = req.username; 

    const Exists = await admin.findOne ({ username : user});     

    if(!Exists) {
        return res.status(400).json({message : 'Admin not found'});  
    }



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