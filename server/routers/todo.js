const express = require("express")
const router = express.Router()
const Todo = require("../models/Todo");
const todoController = require ("../controller/todoController")
router.get("/",todoController.getAllTodos )
router.get("/:id",todoController.getTodoById )
router.post("/", todoController.createNewTodo)
router.delete("/", todoController.deleteTodo)
router.put("/" ,todoController.updateTodo)
router.put("/complete/:id" ,todoController.updateTodoComplete)

   
module.exports = router