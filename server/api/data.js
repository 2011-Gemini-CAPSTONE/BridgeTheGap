const router = require('express').Router()
const Data = require('../db/models/data')

router.get('/', async (req, res, next) => {
  try {
    const data = await Data.findAll()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

module.exports = router
