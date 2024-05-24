// Import the required modules
const express = require("express")
const router = express.Router()

// Import the Controllers

// Course Controllers Import
const {
    createBook,
    getAllBooks,
    getBookDetails,
    deleteBook,
    updateBook,
} = require("../controllers/books")


const { auth } = require("../middlewares/auth")


router.post("/", auth, createBook);
router.get("/", auth, getAllBooks);
router.get("/:id", auth, getBookDetails);
router.put("/", auth, updateBook);
router.delete("/", auth, deleteBook);

module.exports = router
