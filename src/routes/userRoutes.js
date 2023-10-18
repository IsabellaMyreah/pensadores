const express = require("express");

const UsersController = require("../controllers/UsersController");

const router = express.Router();

// router.get("/users/dashboard", UsersController.dashboard);

//Rota para CADASTRAR um usuário no banco.
router.post("/users", UsersController.createUser);

//Rota para MOSTRAR TODOS os usuários cadastrados.
router.get("/users", UsersController.findAllUsers);

//Rota para MOSTRAR APENAS UM usuário cadastrado escolhido pelo id.
router.get("/users/:id", UsersController.findUser);

//Rota para ATUALIZAR um usuário cadastrado escolhido pelo id.
router.put("/users/:id", UsersController.updateUser);

//Rota para DELETAR um usuário cadastrado escolhido pelo id.
router.delete("/users/:id", UsersController.deleteUser);

module.exports = router;