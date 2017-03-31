const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const tallyRouter = require("./routers/tallyRouter.js");
const userRouter = require("./routers/userRouter.js");

app.use(express.static(__dirname + "/public"));

app.use("/api/1/",tallyRouter);
app.use("/api/1/",userRouter);

app.listen(port);
console.log("Node listening on: " + port);