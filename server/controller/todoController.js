const Todo = require("../models/Todo")
const getAllTodos = async (req, res) => {
    const todos = await Todo.find().lean()
    if (!todos.length) {
        return res.status(400).json({ massage: 'No todos found' })
    }
    res.json(todos)
}

const getTodoById = async (req, res) => {
    const { id } = req.params
    const todo = await Todo.findById(id).lean()
    if (!todo) {
        return res.status(400).json({ massage: 'No todo found' })
    }
    res.json(todo)

}

const createNewTodo = async (req, res) => {
    const { title,tags, completed } = req.body
    if (!title) {
        return res.status(400).json({ message: 'you need to press title' })
    }
    const todo = await Todo.create({ title, completed ,tags })
    if (todo) {
        return res.status(201).json({ massage: 'New todo created' })
    }
    else {
        return res.status(400).json({ massage: 'Invalid todo' })
    }
}
const updateTodo = async (req, res) => {
    const { _id, title, completed,tags } = req.body
    if (!_id || !title) {
        return res.status(400).json({ massage: 'Fields are required' })
    }
    const todo = await Todo.findById(_id).exec()
    if (!todo) {
        return res.status(400).json({ massage: 'Todo not found' })
    }
    todo.title = title
    todo.tags = tags
    todo.completed = completed
    const updateTodo = await todo.save()
    res.json(`'${updateTodo.title}' updated`)
}
const deleteTodo = async (req, res) => {
    const { id } = req.body
    const todo = await Todo.findById(id).exec()
    if (!todo) {
        return res.status(400).json({ massage: 'Todo not found' })
    }
    const result = await todo.deleteOne()
    const reply = 'Task  ${result.title} ID ${result._id} deleted'
    res.json(reply)
}

const updateTodoComplete = async (req, res) => {
    const { id } = req.params
    const todo = await Todo.findById(id).exec()
    if (!todo) {
        return res.status(400).json({ massage: 'Todo not found' })
    }
    todo.completed = !todo.completed
    const updateTodo = await todo.save()
    res.json(`'${updateTodo.name}'updated `)
}


module.exports = { getAllTodos, createNewTodo, deleteTodo, getTodoById, updateTodoComplete, updateTodo}
 
