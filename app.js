var express = require("express");

var firstRouter = require("./Routers/firstRouter");
var app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

app.use("/api", firstRouter);
