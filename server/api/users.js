const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

const isAdminMiddleware = (req, res, next) => {
  const currentUser = req.user
  if (currentUser && currentUser.isAdmin) {
    next()
  } else {
    const error = new Error('Not Admin')
    error.status = 401
    next(error)
  }
}

const isUserMiddleware = (req, res, next) => {
  const currentUser = req.user
  if (currentUser && currentUser === req.params.id) {
    next()
  } else {
    const error = new Error('Please Sign In')
    error.status = 401
    next(error)
  }
}

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const users = await User.create(req.body)
    res.json(users)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', isUserMiddleware, async (req, res, next) => {
  try {
    const users = await User.findByPk(req.params.id)
    res.send(await users.update(req.body))
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', isUserMiddleware, async (req, res, next) => {
  try {
    const users = await User.findByPk(req.params.id)
    await users.destroy()
  } catch (error) {
    next(error)
  }
})
