const express = require('express');
const router = express.Router();

const Post = require('../models/post');

router.get('/', async (req, res) => {
	try {
		const posts = await Post.find();
		res.send(posts);
	} catch (err) {
		res.send(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.send(post);
	} catch (err) {
		res.send(err);
	}
});

router.post('/', async (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description
	});
	try {
		const result = await post.save();
		res.send(result);
	} catch (err) {
		res.send(err);
	}
});

router.patch('/:id', async (req, res) => {
	try {
		const updatedPost = await Post.updateOne(
			{ _id: req.params.id },
			{
				$set: {
					description: req.body.description
				}
			}
		);
		res.send(updatedPost);
	} catch (err) {
		res.send(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const deletedPost = await Post.remove({ _id: req.params.id });
		res.send(deletedPost);
	} catch (err) {
		res.send(err);
	}
});

module.exports = router;
