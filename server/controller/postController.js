const Post = require("../models/Post")
const getAllPosts = async (req, res) => {
    const posts = await Post.find().lean()
    if (!posts.length) {
        return res.status(400).json({ massage: 'No posts found' })
    }
    res.json(posts)
}
const getPostById = async (req, res) => {
    const { id } = req.params
    const post = await Post.findById(id).lean()
    if (!post) {
        return res.status(400).json({ massage: 'No post found' })
    }
    res.json(post)

}
const createNewPost = async (req, res) => {
    const { title, body } = req.body
    if (!title) {
        return res.status(400).json({ message: 'you need to press title' })
    }
    const post = await Post.create({ title, body })
    if (post) {
        return res.status(201).json({ massage: 'New post created' })
    }
    else {
        return res.status(400).json({ massage: 'Invalid post' })
    }
}
const updatePost = async (req, res) => {
    const { _id, title, body } = req.body
    if (!_id ||!title) {
        return res.status(400).json({ massage: 'Fields are required' })
    }
    const post = await Post.findById(_id).exec()
    if (!post) {
        return res.status(400).json({ massage: 'Post not found' })
    }
    post.title = title
    post.body = body
    const updatePost = await post.save()
    res.json(`'${updatePost.title}' updated`)
}
const deletePost = async (req, res) => {
    const { id } = req.body
    const post= await Post.findById(id).exec()
    if (!post) {
        return res.status(400).json({ massage: 'Post not found' })
    }
    const result = await post.deleteOne()
    const reply = 'Post  ${result.title} ID ${result._id} deleted'
    res.json(reply)
}




module.exports = { getAllPosts, createNewPost, deletePost, getPostById, updatePost }
