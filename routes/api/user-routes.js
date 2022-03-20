const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUsers).post(createUser);

router.route("/").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
