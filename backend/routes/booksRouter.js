import express from "express";
import {
  createNewBook,
  getAllBooks,
  getOneBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

const router = express.Router();

// save book on db
router.post("/", createNewBook);

// get all books from db
router.get("/", getAllBooks);

// get one book from db
router.get("/:id", getOneBook);

// update book on db
router.put("/:id", updateBook);

// delete book from db
router.delete("/:id", deleteBook);

export default router;
