// Dependencies
// =============================================================
const router = require("express").Router();
const Post = require("../models/post");

// Routes
// =============================================================

// GET route for getting all of the posts
router.get("/api/posts/", (req, res) => {
  Post.findAll({}).then((dbPost) => {
    res.json(dbPost);
  });
});

// GET route for retrieving posts of a specific category
router.get("/api/posts/category/:category", (req, res) => {
  Post.findAll({
    where: {
      category: req.params.category,
    },
  }).then((dbPosts) => res.json(dbPosts));
});

// GET route for retrieving a single post
// We can get the id of the post from 'req.params.id'
router.get("/api/posts/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
  }).then((post) => res.json(post));
});

// POST route for saving a new post
router.post("/api/posts", (req, res) => {
  console.log(req.body);
  const { title, body, category } = req.body;
  Post.create({
    title, //same as title: title, or req.body.title
    category,
    body,
  }).then((dbPost) => res.json(dbPost));
});

// DELETE route for deleting a post
router.delete("/api/posts/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  }).then((post) => res.json(post));
});

// PUT route for updating a post
router.put("/api/posts/:id", (req, res) => {
  const { body, title, category } = req.body;
  Post.update(
    {
      body,
      title,
      category,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((post) => res.json(post));
});

module.exports = router;
