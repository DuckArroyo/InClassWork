// Dependencies
// =============================================================
const express = require("express");
const exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Data
// =============================================================
const books = [
  {
    title: "Love You Forever",
    read: false,
    author: "Robert Munsch",
  },
  {
    title: "The Giving Tree",
    read: false,
    author: "Shel Silverstein",
  },
  {
    title: "Where the Red Fern Grows",
    read: true,
    author: "Wilson Rawls",
  },
  {
    title: "The Fault in Our Stars",
    read: true,
    author: "John Green",
  },
  {
    title: "Out of My Mind",
    read: false,
    author: "Sally Engelfried",
  },
  {
    title: "Wonder",
    read: false,
    author: "Barbara Schultz",
  },
];

// Routes
// =============================================================

app.get("/", (req, res) => {
  res.render("index", {
    library: books,
  });
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
