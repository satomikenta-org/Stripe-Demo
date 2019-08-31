const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const router = express.Router();

router.use(helmet());
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(cookieParser());

module.exports = router;