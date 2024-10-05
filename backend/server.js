const express = require("express");
const mongoose = require("mongoose");
const machineRoutes = require("./routes/machines");
const userRoutes = require("./routes/users");
const dispenserRoutes = require("./routes/dispensers");
const recipeRoutes = require("./routes/recipes");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const dbUrl = process.env.MONGO_URL;

const app = express();
app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.use("/api/machines", machineRoutes);
app.use("/api/users", userRoutes);
app.use("/api/dispensers", dispenserRoutes);
app.use("/api/recipes", recipeRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
