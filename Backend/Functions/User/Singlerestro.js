const {  restaurant } = require("../../db");

async function singlerestro (req,res){

    const id = req.params.id;    

    const hotel = await restaurant.findOne({ _id : id });

    if (!hotel) {
        return res.status(400).json({ message: 'Restaurant not found' });
    } 

    res.json({
        msg: 'Restaurant Found', 
        restaurant: hotel     
    })   ; 


}

module.exports = singlerestro;   