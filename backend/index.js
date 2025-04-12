import express from "express";
import { PORT } from "./config.js";
import { mongoose } from "mongoose";
import booksRouter from "./routes/booksRouter.js";

const app = express();

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.status(234).send("Hello world!!!!");
});

app.use("/books", booksRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/books-collection")
  .then(() => {
    console.log("Connected with DB");
    app.listen(PORT, () => {
      console.log(`server is running at ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect with DB");
  });
