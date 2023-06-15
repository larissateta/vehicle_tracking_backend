const express = require('express');
const router = express.Router();

router.use('/owner', require("./post.owners"))
router.use('/owner', require('./get.owners'))

module.exports = router


