const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const googleBooks = require("../../controllers/googleBooks");

// Matches with "/api/books"
router.route("/").get(booksController.findAll).post(booksController.create);

router.route("/search").post(googleBooks.search);
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
