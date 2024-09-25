const { userorder } = require("../../db");

async function updatestatus(req, res) {


    const status = req.body; 

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