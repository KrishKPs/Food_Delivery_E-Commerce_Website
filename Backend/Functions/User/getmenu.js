const {   menu } = require("../../db");

async function menurestro (req,res){

    const id = req.params.id;    

    const hotel = await menu.find({ restaurant : id });

    if (!hotel) {
        return res.status(400).json({ message: 'Restaurant not found' });
    } 

    res.json({
        msg: 'Restaurant Found', 
        restaurant: hotel     
    })   ;      




}

module.exports = menurestro;   