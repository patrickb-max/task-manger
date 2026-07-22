// Induvidual backend File 
// Root level for health check
// Routing levels
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());      // allow requests from frontend
app.use(express.json());

// Root route for health check
app.get("/", (req, res) => {
  res.send("Backend is alive!");
});

//In -memory tasks list without included data base 
let tasks = [{ id: 1, title: "Learn Svelte", completed: false }];

// CURD routes

// GET Method
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST Method
app.post("/tasks", (req, res) => {
  const newTask = { id: Date.now(), ...req.body };
  tasks.push(newTask);
  res.json(newTask);
});

// PUT Method
app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.map(t => t.id === id ? { ...t, ...req.body } : t);
  res.json(tasks.find(t => t.id === id));
});

// DELETE Method
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.json({ message: "Task deleted" });
});


app.listen(5000, () => console.log("Task Service running on 5000"));
