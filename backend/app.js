const express = require("express");
const cors = require("cors");
const app = express();
const cors = require("cors");

const productRouter = require("./routes/productsRoute");
const adminRouter = require("./routes/adminRoute");
const userRoutes = require("./routes/userRoutes");

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/v1/products", productRouter);
app.use("/vendor-products", adminRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/users", userRoutes);

module.exports = app;
