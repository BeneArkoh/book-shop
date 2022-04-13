const fs = require("express");
const { Router } = require("express");
const router = Router();
const { checkAuth, timestamp } = require("../middlewares/users.middleware");
c;
const {
  createUser,
  getAllUsers,
  getUsers,
} = require("../controllers/users.controller");
cons;

// get all users
router.get("/", checkAuth, getAllUsers);

// get user by id
router.get("/:id", checkAuth, getUsers);

// add new user
router.post("/", timeStamp, createUser);

module.exports = router;
