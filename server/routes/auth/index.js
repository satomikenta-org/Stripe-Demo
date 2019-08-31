const express = require('express');
const router = express.Router();

router.post('/login', (req, res, next) => {
  res.send('You are loggedIn');
});

module.exports = router;