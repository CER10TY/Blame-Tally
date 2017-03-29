const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const parseRouter = require("./routers/tallyRouter.js");

app.use("/api/1/",parseRouter);

app.listen(port);
console.log("Node listening on: " + port);