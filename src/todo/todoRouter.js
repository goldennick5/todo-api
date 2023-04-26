const express = require('express')
const todoController = require('./todoController')

const router = express.Router()

router.post('/createTodo', todoController.createTodo)

router.get('/getTodo', todoController.getTodo)

router.get('/getTodo/:id', todoController.getOneTodo)

router.put('/updateTodo/:id', todoController.updateOneTodo)

router.delete('/deleteTodo/:id', todoController.deleteTodo)

module.exports = router