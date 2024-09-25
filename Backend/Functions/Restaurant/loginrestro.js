const generateJWT = require("../../MiddleWare/generatejwt");
const { restaurant } = require("../../db");

async function loginrestro (req, res) {


      const username = req.body; 
      const restaurantExists = await restaurant.findOne({ username: username.username })  

      if (!restaurantExists) {
          return res.status(400).json({ message: 'Restaurant not found' });
      }  


      const token = generateJWT(username);   


      res.json({
          msg: 'Restaurant Found', 
            token: token    
      }); 

}

module.exports = loginrestro; 