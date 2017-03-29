const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const parseRouter = require("./routers/parseRouter.js");

app.use("/api",parseRouter);
app.listen(port);
console.log("Node listening on: " + port);