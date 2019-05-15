const express = require('express')
const router = express.Router()

const User = require("../models/User")



/* GET home page */
router.get('/', (req, res) => {
  res.send('ok')
})


module.exports = router
