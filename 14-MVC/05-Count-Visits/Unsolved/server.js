// Dependencies
// =============================================================
const express = require("express");
const exphbs = require("express-handlebars");
// Require the 'express-session' module
const session = require("express-session");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;


const sess(session({
  secret: "keyboard cat",
  cookie: {},
  resave: false,
saveUninitialized: false
}));
app.use(sess)
// Sets Handlebars as the default template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up the session with the 'secret', 'resave', 'saveUninitialized' options
//
// YOUR CODE HERE
//

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
    read: true,
    author: "Barbara Schultz",
  },
];

// Routes
// =============================================================

app.get("/", (req, res) => {
  console.log("request", req.session);

  if (req.session.countVisit) {
    req.session.countVisit++;
    req.session.firstTime = false;
    // If the 'countVisit' session variable exists, increment it by 1 and set the 'firstTime' session variable to 'false'
    //
    // YOUR CODE HERE
    //
  } else {
    req.session.countVisit = 1;
    req.session.firstTime = true;

  }

  const data = {
    library: books,
    countVisit: req.session.countVisit,
    firstTime: req.session.firstTime

  };
  res.render("index", data);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
