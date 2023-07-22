require("dotenv").config();
const mongoose = require("mongoose");

const app = require("./app");

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(console.log("DataBase Connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT;

app.listen(port, (req, res) => {
  console.log("Server is running");
});
