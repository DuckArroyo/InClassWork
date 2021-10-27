// Dependencies
// =============================================================
const router = require("express").Router();
const Todo = require("../models/todo");

// Routes
// =============================================================

// GET route for getting all of the todos
router.get("/api/todos", (req, res) => {
  Todo.findAll({}).then((result) => res.json(result));
});

// POST route for saving a new todo
router.post("/api/todos", (req, res) => {
  Todo.create({
    text: req.body.text,
    complete: req.body.complete,
  }).then((result) => res.json(result));
});

// DELETE route for deleting a todo
router.delete("/api/todos/:id", (req, res) => {
  Todo.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => res.json(result));
});

// PUT route for updating a todo
router.put("/api/todos/:id", (req, res) => {
  Todo.update(
    {
      text: req.body.text,
      complete: req.body.complete,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((result) => res.json(result));
});

module.exports = router;
