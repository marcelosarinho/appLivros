const express = require("express");
const router = express.Router();
const Book = require("../models/book");

router.post("/", async (req, res) => {
  let { name, author, yearOfPublication, genre, language, series } = req.body;
  let book = new Book({ name, author, yearOfPublication, genre, language, series });
  try {
    await book.save();
    res.json(book);
  } catch (error) {
    res.json({ error: "Erro ao criar o livro!" });
  }
})

router.get("/", async (req, res) => {
  try {
    let books = await Book.find({});
    res.status(200).render("books/index", { books: books });
  } catch (error) {
    res.json({ error: "Erro ao mostrar livros!" });
  }
})

router.get("/:id", async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    res.json({ error: "Erro ao encontrar livro!"});
  }
})

router.put("/:id", async (req, res) => {
  let { name, author, yearOfPublication, genre, language, series } = req.body;
  try {
    let book = await Book.findByIdAndUpdate(req.params.id, { name, author, yearOfPublication, genre, language, series }, { new: true });
    res.json(book);
  } catch (error) {
    res.json({ error: "Erro ao atualizar livro!" });
  }
})

router.delete("/:id", async (req, res) => {
  try {
    await Book.findByIdAndRemove(req.params.id);
    res.json({ message: "Livro deletado!" });
  } catch (error) {
    res.json({ error: "Erro ao deletar livro!" });
  }
})

module.exports = router;