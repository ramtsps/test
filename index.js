const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let users = [];
let id = 1;

// Home Page: Show form + table
app.get("/", (req, res) => {
  res.render("index", { users });
});

// Add User
app.post("/add", (req, res) => {
  const { name, email } = req.body;
  users.push({ id: id++, name, email });
  res.redirect("/");
});

// Delete User
app.get("/delete/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userId);
  res.redirect("/");
});

// Show Edit Form
app.get("/edit/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  res.render("edit", { user });
});

// Update User
app.post("/update/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  const user = users.find((u) => u.id === userId);
  if (user) {
    user.name = name;
    user.email = email;
  }
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
