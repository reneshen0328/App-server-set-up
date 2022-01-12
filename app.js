const express = require("express");
const app = express();

const { db, Menu, Restaurant, MenuItem, seed } = require("./index");

const port = 8080;

app.get("/", async (req, res) => {
  res.send("<h1>Hello!</h1>");
});

app.get("/restaurants", async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.json({ restaurants });
});

app.get("/menuitem/:id", async (req, res) => {
  const menuitem = await MenuItem.findByPk(req.params.id);
  res.json({ menuitem });
});

app.get("/menu/:id", async (req, res) => {
  const menu = await Menu.findByPk(req.params.id, { include: MenuItem });
  res.json({ menu });
});

app.listen(port, async () => {
  await seed();
  console.log(`Server is listening on http://localhost:${port}`);
});
