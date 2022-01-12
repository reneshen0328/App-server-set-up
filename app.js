const express = require("express");
const app = express();

const { db, Menu, Restaurant, MenuItem, seed } = require("./index");

const port = 8080;

// async function seeding() {
//   await seed();
// }

// seeding();

// Parse json
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("<h1>Hello!</h1>");
});

app.get("/restaurants", async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.json({ restaurants });
});

app.get("/menuitem", async (req, res) => {
  const menuitem = await MenuItem.findAll();
  res.json({ menuitem });
});

app.get("/menu/:id", async (req, res) => {
  const menu = await Menu.findByPk(req.params.id, { include: MenuItem });
  res.json({ menu });
});

app.post("/restaurants", async(req,res) =>{
    await Restaurant.create(req.body)
    res.send("Created!")
})

app.put("/restaurants/:id", async(req,res) =>{
    await Restaurant.update(
        req.body,
        {where:{id: req.params.id}}
    )
    res.send("Updated!")
})

app.delete("/restaurants/:id", async(req,res) =>{
    await Restaurant.destroy(
        {where:{id: req.params.id}}
    )
    res.send("Deleted!")
})



app.listen(port, async () => {
    await seed();
  //   await db.sync({ force: true });
  console.log(`Server is listening on http://localhost:${port}`);
});
