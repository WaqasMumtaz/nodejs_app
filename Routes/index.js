const express = require('express');
const router = express.Router();

router.use('/get_all_users', require('./users'));

module.exports = router;