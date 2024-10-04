const express = require("express");
const mongoose = require("mongoose");
const machineRoutes = require("./routes/machines");
const userRoutes = require("./routes/users");
const dispenserRoutes = require("./routes/dispensers");
const recipeRoutes = require("./routes/recipes");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/epicure")
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.use("/api/machines", machineRoutes);
app.use("/api/users", userRoutes);
app.use("/api/dispensers", dispenserRoutes);
app.use("/api/recipes", recipeRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
