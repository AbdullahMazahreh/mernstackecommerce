const express = require("express");
const app = express();

const userRouter = require("./routes/usersRoute");
const productRouter = require("./routes/productsRoute");
const adminRouter = require("./routes/adminRoute");

app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/admin", adminRouter);

module.exports = app;
