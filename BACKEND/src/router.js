// Importa o express
const express = require('express')

// Importa o tasksController e tasksMiddleware
const tasksController = require('./controllers/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddleware')

// Imporat o obsController e obsMiddleware
const obsController = require('./controllers/obsController')
const obsMiddleware = require('./middlewares/obsMiddleware')

// Cria uma rota
const router = express.Router()

// Faz as rotas de get, post, delete e put, utilizando os validadores quando necessário
router.get('/tasks', tasksController.getAll)
router.post('/tasks', tasksMiddleware.validatePost, tasksController.createTask)
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id', tasksMiddleware.validatePut, tasksController.updateTask)

// Faz as rotas de get, post, delete e put, utilizando os validadores quando necessário
router.get('/obs', obsController.getAll)
router.post('/obs', obsMiddleware.validatePost, obsController.createObs)
router.delete('/obs/:id', obsController.deleteObs)
router.put('/obs/:id', obsMiddleware.validatePut, obsController.updateObs)

// Exporta as rotas
module.exports = router