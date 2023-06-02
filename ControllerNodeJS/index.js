const express = require("express");
const app = express();
const { db } = require("./config/db");
db.connect();
app.use(express.json());
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
app.listen(8080);
