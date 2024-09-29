const { userorder, admin } = require("../../db");

async function updatestatus(req, res) {


    const status = req.body; 

    const user = req.username;   

    const adminExist = await admin.findOne({ username: user });  
    if (!adminExist) { 

        return res.status(404).json({ msg: 'Admin not found' });        
     }
     

    const update = await userorder.updateOne({ 'orders._id': status.id }, { $set: { 'orders.$.status': status.status } });   


    if (update.nModified === 0) {
        return res.status(404).json({ msg: 'Order not found or status not updated' });
    }

    res.json({
        msg: 'Order Updated',
        order: status
    });     

 }

 module.exports = updatestatus;  