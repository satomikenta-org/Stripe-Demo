const express = require('express');
const router = express.Router();

router.get('/me', (req, res, next) => {
  res.send('You are OK');
});

module.exports = router;