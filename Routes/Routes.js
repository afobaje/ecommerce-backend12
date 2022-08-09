const express = require("express");
const router = express.Router();
const {
  getItem,
  postItem,
  updateItem,
  delItem,
} = require("../Controller/Controller");

router.route("/").get(getItem).post(postItem);
router.route("/:id").put(updateItem).delete(delItem);

module.exports = router;
