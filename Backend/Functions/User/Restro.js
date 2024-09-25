const { restaurant } = require("../../db");

async function cityrestro(req, res) {



    const city = req.body ; 

    const restaurants = await restaurant.find({ adress: { $regex : city.city} }); // Ensure you're using `address` and not `adress`

    if (!restaurants.length) {
        return res.status(400).json({ message: 'No Restaurants Found' });
    }

    res.json({
        msg: 'Restaurants Found',
        restaurants: restaurants
    });
}

async function restaurants(req, res) {
    const restaurants = await restaurant.find();

    if (!restaurants.length) {
        return res.status(400).json({ message: 'No Restaurants Found' });
    }

    res.json({
        msg: 'Restaurants Found',
        restaurants: restaurants
    });
}

// Export both functions
module.exports = {
    cityrestro,
    restaurants
};
