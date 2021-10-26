const express = require("express");

// const server = http.createServer((req, res) => (
//     res.write("Hello World");
//     res.end();
// ));

const app = express();
//middleware
app.use(express.json());
app.use(express.urlendcoded({ extended: true }));
//! Create data - saving data = POST, app.post()
//! Read data - get the data from the server = GET, app.get()
//! Update data - PUT, app.put()
//! Delete data - DELETE, app.delete()
//! These operations are "CRUD"

const users = [
  {
    id: 1234,
    name: "Peter Parker",
    age: 23,
  },
  {
    id: 56,
    name: "Emma Watson",
    age: 23,
  },
];

app.get("/", (req, res) => {
  res.send("Hello world");
});
// server.listen(3002)

app.get("/users/:id", (req, res) => {
  console.log("Request", req.params);
  users.map((user) => {
    if (user.id === parseInt(req.params.id)) {
      return res.send(user);
    }
  });
  return res.send("Did not find user");
});

//for users
app.get("/users", (req, res) => {
  res.send("This is the users route");
});

//Post will not work
app.post("/users", (req, res) => {
  res.send("This is the post route");
});

//goes at the bottom of the page.
app.listen(3001, () => {
  console.log("server is runnning");
});
