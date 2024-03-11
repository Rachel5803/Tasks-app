const User = require("../models/User")
const getAllUsers = async (req, res) => {
    const users = await User.find().lean()
    if (!users.length) {
        return res.status(400).json({ massage: 'No users found' })
    }
    res.json(users)
}
const getUserById = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id).lean()
    if (!user) {
        return res.status(400).json({ massage: 'No user found' })
    }
    res.json(user)

}
const createNewUser = async (req, res) => {
    const { name, username, email, address, phone } = req.body
    if (!name) {
        return res.status(400).json({ message: 'you need to press name' })
    }
    const user = await User.create({ name, username,email, address, phone })
    if (user) {
        return res.status(201).json({ massage: 'New user created' })
    }
    else {
        return res.status(400).json({ massage: 'Invalid user' })
    }
}
const updateUser = async (req, res) => {
    const { _id, name, username, email, address, phone} = req.body
    if (!_id || !name) {
        return res.status(400).json({ massage: 'Fields are required' })
    }
    const user = await User.findById(_id).exec()
    if (!user) {
        return res.status(400).json({ massage: 'User not found' })
    }
    user.name = name
    user.username = username
    user.email = email
    user.address = address
    user.phone = phone
    const updateUser = await user.save()
    res.json(`'${updateUser.name}' updated`)
}
const deleteUser = async (req, res) => {
    const { id } = req.body
    const user = await User.findById(id).exec()
    if (!user) {
        return res.status(400).json({ massage: 'User not found' })
    }
    const result = await user.deleteOne()
    const reply = 'User  ${result.name} ID ${result._id} deleted'
    res.json(reply)
}


module.exports = { getAllUsers, createNewUser, deleteUser, getUserById, updateUser }
