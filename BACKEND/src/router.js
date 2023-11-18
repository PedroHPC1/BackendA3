const express = require('express')

const tasksController = require('./controllers/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddleware')

const obsController = require('./controllers/obsController')
const obsMiddleware = require('./middlewares/obsMiddleware')

const router = express.Router()

router.get('/tasks', tasksController.getAll)
router.post('/tasks', tasksMiddleware.validatePost, tasksController.createTask)
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id', tasksMiddleware.validatePut, tasksController.updateTask)

router.get('/obs', obsController.getAll)
router.post('/obs', obsMiddleware.validatePost, obsController.createObs)
router.delete('/obs/:id', obsController.deleteObs)
router.put('/obs/:id', obsMiddleware.validatePut, obsController.updateObs)

module.exports = router