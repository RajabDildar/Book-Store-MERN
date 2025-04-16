import express from "express";
import { mongoose } from "mongoose";
import booksRouter from "./routes/booksRouter.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

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
  .catch(() => {
    console.log("Failed to connect with DB");
  });
