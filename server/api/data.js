const router = require('express').Router()
const Data = require('../db/models/data')

// const isAdminMiddleware = (req, res, next) => {
//   const currentUser = req.user
//   if (currentUser && currentUser.isAdmin) {
//     next()
//   } else {
//     const error = new Error('Not Admin')
//     error.status = 401
//     next(error)
//   }
// }

const isUserMiddleware = (req, res, next) => {
  const currentUser = req.user
  if (currentUser !== undefined) {
    next()
  } else {
    const error = new Error('Please Sign In')
    error.status = 401
    next(error)
  }
}

router.get('/', async (req, res, next) => {
  try {
    const data = await Data.findAll()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.post('/', isUserMiddleware, async (req, res, next) => {
  try {
    const data = await Data.create(req.body)
    res.json(data)
  } catch (error) {
    next(error)
  }
})

router.put(
  '/:id',
  /*isUserMiddleware*/ async (req, res, next) => {
    try {
      const data = await Data.findByPk(req.params.id)
      res.send(await data.update(req.body))
    } catch (error) {
      next(error)
    }
  }
)

router.delete(
  '/:id',
  /*isUserMiddleware*/ async (req, res, next) => {
    try {
      const data = await Data.findByPk(req.params.id)
      await data.destroy()
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
