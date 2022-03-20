const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  addReaction,
  updateThought,
  removeReaction,
  removeThought,
} = require("../../controllers/thought-controller.js");

router.route("/").get(getAllThoughts).post(addThought);
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);
router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
