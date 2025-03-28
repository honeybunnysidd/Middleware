const express = require("express");
const app = express();

//Middleware --->
/*
app.use((req, res, next) => {
  console.log("Hey");
  next();
});

app.use((req, res, next) => {
  console.log("Hey 2");
  next();
});
*/
// Utility Middleware---------->
/*
app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString(); // Change in req body
  console.log(req.method, req.hostname, req.path, req.time);
  next();
});
*/

app.use("/random", (req, res, next) => {
  console.log(req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Home Route");
});
app.get("/random", (req, res) => {
  res.send("I am random page");
});

app.listen(8080, () => {
  console.log("Server is listening on 8080");
});
