const stripe = require('stripe')(process.env.SECRET_KEY); 

async function payment(req, res) {
    try {
        const { amount } = req.body;

        if (!amount || amount < 0) {
            return res.status(400).json({ error: 'Invalid payment amount' });
        }

        // Create a payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
        });

        // Respond with the client secret and success message
        res.status(200).json({
            client_secret: paymentIntent.client_secret,
            msg: 'Payment successful',
        });

    } catch (error) {
        console.error("Payment Error:", error);
        // If there is an error, respond with a 500 status and error message
        res.status(500).json({ error: 'Payment processing failed. Please try again.' });
    }
}

module.exports = payment;
