const express = require('express')
const verifytoken = require('../middleware/auth')
const router = express.Router()
const verifyToken = require('../middleware/auth')


const Post = require('../models/Post')

router.get('/abc', (req, res) => res.send("ROUTER USE"))


router.post('/', verifyToken, async (req, res) => {
	const { title, description, url, status } = req.body

	// Simple validation
	if (!title)
		return res
			.status(400)
			.json({ success: false, message: 'Title is required' })

	try {
		const newPost = new Post({
			title,
			description,
			url: url.startsWith('https://') ? url : `https://${url}`,
			status: status || 'TO LEARN',
			user: req.userId
		})

		await newPost.save()

		res.json({ success: true, message: 'Happy learning!', post: newPost })

	} catch (error) {
		console.log(`error:${error}`)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})


router.get('/', verifyToken, async (req, res) => {
	try {
		const posts = await Post.find({ user: req.userId }).populate('user', ['username'])
		res.json({ success: true, posts })
	} catch (error) {
		console.log(`error:${error}`)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

//update
router.put('/:id', verifyToken, async (req, res) => {
	const { title, description, url, status } = req.body

	// Simple validation
	if (!title)
		return res
			.status(400)
			.json({ success: false, message: 'Title is required' })

	try {
		let updatedPost = {
			title,
			description: description || '',
			url: (url.startsWith('https://') ? url : `https://${url}`) || '',
			status: status || 'To learn',
		}

		const postUpdateCondition = { _id: req.params.id, user: req.userId }

		updatePost = await Post.findOneAndUpdate(postUpdateCondition, updatedPost, { new: true })

		if (!postUpdateCondition)
			return res
				.status(500)
				.json({ success: false, message: 'post condition false' })


		res.json({ success: true, message: 'post updated',updatedPost })
	} catch (error) {
		console.log(`error:${error}`)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

//delete

router.delete('/:id', verifyToken, async (req, res) => {
	try {
		const postDeleteCondition = { _id: req.params.id, user: req.userId }
		const deletedPost = await Post.findOneAndDelete(postDeleteCondition)

		// User not authorised or post not found
		if (!deletedPost)
			return res.status(401).json({
				success: false,
				message: 'Post not found or user not authorised'
			})

		res.json({ success: true, post: deletedPost })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})
module.exports = router