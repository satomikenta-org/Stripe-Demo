const express = require('express');
const router = express.Router();

const authRoute = require('./auth');
const userRoute = require('./user');
const purchaseRoute = require('./stripe');

router.use('/user', userRoute);
router.use('/auth', authRoute);
router.use('/stripe', purchaseRoute);
module.exports = router;