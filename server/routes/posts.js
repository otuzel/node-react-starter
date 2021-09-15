const express = require('express');

const router = express.Router();
const Post = require('../models/Post');

const posts = [
  {
    id: 1,
    title: 'First Post',
    content: 'Content for First Post',
  },
  {
    id: 2,
    title: 'Second Post',
    content: 'Content for Second Post',
  },
];

router.get('/', async (req, res) => {
  res.json(posts);
});

module.exports = router;
