const Photo = require("../models/Photo")
const getAllPhotos = async (req, res) => {
    const photos = await Photo.find().lean()
    if (!photos.length) {
        return res.status(400).json({ massage: 'No photo found' })
    }
    res.json(photos)
}
const getPhotoById = async (req, res) => {
    const { id } = req.params
    const photo = await Photo.findById(id).lean()
    if (!photo) {
        return res.status(400).json({ massage: 'No photo found' })
    }
    res.json(photo)

}
const createNewPhoto = async (req, res) => {
    const { title, imageUrl } = req.body
    if (!title) {
        return res.status(400).json({ message: 'you need to press title' })
    }
    const photo = await Photo.create({ title, imageUrl })
    if (photo) {
        return res.status(201).json({ massage: 'New photo created' })
    }
    else {
        return res.status(400).json({ massage: 'Invalid photo' })
    }
}
const updatePhoto = async (req, res) => {
    const { _id, title, imageUrl } = req.body
    if (!_id || !title) {
        return res.status(400).json({ massage: 'Fields are required' })
    }
    const photo = await Photo.findById(_id).exec()
    if (!photo) {
        return res.status(400).json({ massage: 'Photo not found' })
    }
    photo.title = title
    photo.imageUrl = imageUrl
    const updatePhoto = await photo.save()
    res.json(`'${updatePhoto.title}' updated`)
}
const deletePhoto = async (req, res) => {
    const { id } = req.body
    const photo = await Photo.findById(id).exec()
    if (!photo) {
        return res.status(400).json({ massage: 'Photo not found' })
    }
    const result = await photo.deleteOne()
    const reply = 'Photo  ${result.title} ID ${result._id} deleted'
    res.json(reply)
}
module.exports = {getAllPhotos, createNewPhoto, deletePhoto, getPhotoById, updatePhoto }

