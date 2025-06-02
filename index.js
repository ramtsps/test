const express = require("express");

// Import routes

const list = {
  1: {
    name: "ram",
    age: 21,
    email: "ema@g.com",
  },
  2: {
    name: "ram2",
    age: 20,
    email: "mailema@g.com",
  },
};

const app = express();
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.render("index");
});

app.get("/list", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(list);
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Data Added");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
