const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

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
let checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token == "secret") {
    next();
  } else {
    //Throw Error
    throw new ExpressError(401, "Shi Kro ise bhai");
  }
};

app.get("/api", checkToken, (req, res) => {
  res.send("This is your api");
});

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
//Activity
app.use("/admin", (req, res, next) => {
  throw new ExpressError(403, "Access denied");
});
app.get("/admin", (req, res) => {
  res.send("OK");
});

//Error Handling

app.get("/error", (req, res) => {
  stupid != stupid;
});

app.use((err, req, res, next) => {
  let { status = 505, message } = err;
  console.log(`---------------Error---------------`);
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Server is listening on 8080");
});
