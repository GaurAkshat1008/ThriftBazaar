import express from "express";
import router from "./Routes/routes.js";
import Connection from "./database/db.js";
import { createJsonFile } from "./Resolvers/itemResolvers.js";
import schedule from "node-schedule";
import cors from "cors";
import { Redis } from "ioredis";
import session from "express-session";
import RedisStore from "connect-redis";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  const app = express();
  Connection();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
  app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
  });

  const redis = new Redis();
  app.use(session({
    store: new RedisStore({ client: redis }),
    name: "qid",
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    },
  }));

  schedule.scheduleJob("*/1 * * * *", function () {
    createJsonFile();
  });

  app.use("/", router);

  app.listen(4000, () => {
    console.log("Server is running on port 4000");
  });
};

main().catch((err) => {
  console.error(err);
})
