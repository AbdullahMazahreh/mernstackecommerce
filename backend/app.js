const express = require("express");
const cors = require("cors");
const app = express();

const userRouter = require("./routes/usersRoute");
const productRouter = require("./routes/productsRoute");
const adminRouter = require("./routes/adminRoute");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/vendor-products", adminRouter);

module.exports = app;
