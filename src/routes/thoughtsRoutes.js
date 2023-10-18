const express = require("express");

const ThoughtsController = require("../controllers/ThoughtsController");

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsController.dashboard);

//Rota para CADASTRAR um pensamento no banco.
router.post("/thoughts", ThoughtsController.createThought);

//Rota para MOSTRAR TODOS os pensamento cadastrados.
router.get("/thoughts", ThoughtsController.findAllThoughts);

//Rota para MOSTRAR APENAS UM pensamento cadastrado escolhido pelo id.
router.get("/thoughts/:id", ThoughtsController.findThoughts);

//Rota para ATUALIZAR um pensamento cadastrado escolhido pelo id.
router.put("/thoughts/:id", ThoughtsController.updateThoughts)

//Rota para DELETAR um pensamento cadastrado escolhido pelo id.
router.delete("/thoughts/:id", ThoughtsController.deleteThoughts);

module.exports = router;
