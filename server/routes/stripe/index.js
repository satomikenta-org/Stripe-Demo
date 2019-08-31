const express = require('express');
const { stripe: { stripe_token } } = require('../../config');
const stripe = require("stripe")(stripe_token);
const router = express.Router();

// purchase route
router.post('/', async (req, res, next) => {
  try {
    const { amount, currency, source, customer } = req.body;
    const result = await stripe.charges.create({
      amount,
      currency,
      source, // if charge with token_id 
      customer// if charge with customer_id
    })
    console.log("Stripe.charge Result", result);
    res.send(result);
  } catch (ex) {
    console.log("Stripe.charge Error", ex);
    next(ex);
  }
});

router.post('/create-customer', async (req, res, next) => {
  console.log("req.body.token", req.body.token);
  try {
    const customer = await stripe.customers.create({
      description: "First Customer",
      source: req.body.token
    })
    console.log("Customer", customer);
    res.send(customer);
  } catch (ex) {
    console.log("CreateCustomer Ex", ex);
    next(ex);
  }
})



module.exports = router;