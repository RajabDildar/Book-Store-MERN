import { Book } from "../models/bookModel.js";

const createNewBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required feilds! title, author and publishYear.",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    return res.status(201).json({
      count: allBooks.length,
      data: allBooks,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const getOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      res.status(500).send("Book not found!");
    }

    return res.status(201).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message:
          "Send all required feilds to update! title, author and publishYear.",
      });
    }

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      res.status(500).send("Book not found!");
    }

    return res.status(201).send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      res.status(500).send("Book not found!");
    }

    return res.status(201).send(`Book deleted successfully`);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export { createNewBook, getAllBooks, getOneBook, updateBook, deleteBook };
