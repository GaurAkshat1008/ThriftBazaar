import express from "express";
import router from "./Routes/routes.js";
import Connection from "./database/db.js";


const app = express();
Connection();
// connect to mongodb

app.use("/", router);

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
