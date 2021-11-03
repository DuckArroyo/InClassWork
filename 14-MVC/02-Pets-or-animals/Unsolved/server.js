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
const animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4,
  },
  {
    animalType: "cat",
    pet: true,
    fierceness: 6,
  },
  {
    animalType: "giraffe",
    pet: false,
    fierceness: 4,
  },
  {
    animalType: "zebra",
    pet: false,
    fierceness: 8,
  },
  {
    animalType: "lion",
    pet: false,
    fierceness: 10,
  },
];

// Routes
// =============================================================

app.get("/all-pets", (req, res) => {
  const data = {
    animals: [],
  };
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].pet) {
      data.animals.push(animals[i]);
    }
  }
  res.render("index", data);
  // Loop through the animals, and send those that are pets to the `index.handlebars` file.
  // Hint: Handlebars requires an object to be sent to the `index.handlebars` file, not an array!
  //
  // YOUR CODE HERE
  //
});

app.get("/all-non-pets", (req, res) => {
  const data = {
    animals: [],
  };
  for (let i = 0; i < animals.length; i++) {
    if (!animals[i].pet) {
      data.animals.push(animals[i]);
    }
  }
  res.render("index", data);

  // Loop through the animals, and send those that are NOT pets to the `index.handlebars` file.
  // Hint: Handlebars requires an object to be sent to the `index.handlebars` file, not an array!
  //
  // YOUR CODE HERE
  //
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
