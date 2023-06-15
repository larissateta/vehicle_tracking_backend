const express = require('express');
const router = express.Router();

router.use('/', require('./Admin/post.register'));
router.use('/', require('./Admin/post.login'));

router.use('/owner', require("../routes/Owners/post.owners"))
router.use('/owner', require('../routes/Owners/get.owners'))

router.use("/cars", require("./Cars/post.car"))
router.use('/cars', require('./Cars/get.cars'))
router.use("/cars", require("./Cars/delete.car"))

module.exports = router;