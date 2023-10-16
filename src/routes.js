const express = require("express");
const ThoughtsController = require("./controllers/ThoughtsController");

const UsersController = require("./controllers/UsersController");

const router = express.Router();

router.post("/users", UsersController.createUser);
router.get("/users", UsersController.findAllUsers);
router.get("/users/:id", UsersController.findUser);
router.put("/users/:id", UsersController.updateUser)
router.delete("/users/:id", UsersController.deleteUser);


router.post("/thoughts", ThoughtsController.createThought);
router.get("/thoughts", ThoughtsController.findAllThoughts);
router.get("/thoughts/:id", ThoughtsController.findThoughts);
router.put("/thoughts/:id", ThoughtsController.updateThoughts)
router.delete("/thoughts/:id", ThoughtsController.deleteThoughts);


module.exports = router;