const express = require("express")
const auth = require("../middleware/auth")
const Post = require("../models/post")
const router = express.Router()

/*******
 * create new post
 */
router.post('/posts', auth, async (req, res) => {
    const post = new Post({
        ...req.body,
        createdBy: req.user._id
    })

    try {
        await post.save()
        res.status(201).send(post)
    } catch (e) {
        res.status(400).send(e)
    }
})

/*********
 * fetch all POSTS
 */
router.get('/posts', auth, async (req, res) => {
    try {
        await req.user.populate('posts').execPopulate()
        res.send(req.user.posts)
    } catch (e) {
        res.status(500).send()
    }
})

/******
 * fetch a single POST
 */
router.get('/posts/:id', auth, async (req, res) => {
    const _id = req.params.id
    try {
        const post = await Post.findOne({_id, createdBy: req.user._id})
        if (!post) {
            return res.status(404).send()
        }
        res.send(post)
    } catch (e) {
        res.status(500).send(e)
    }
})

/******
 * update a POST
 */
router.patch('/posts/:id', auth, async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)

    try {
        const post = await Post.findOne({ _id, createdBy: req.user.id })
        if (!post) {
            return res.status(404).send()
        }

        updates.forEach((update) => {
            post[update] = req.body[update]
        })
        await post.save()
        res.send(post)
    } catch (e) {
        res.status(500).send(e)
    }
})

/*****
 * DELETE a POST
 */
router.delete('/posts/:id', auth, async (req, res) => {
    try {
        const post = await Post.findOneAndDelete({_id: req.params.id, createdBy: req.user._id})
        if (!post) {
            return res.status(404).send()
        }
        res.send(post)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router