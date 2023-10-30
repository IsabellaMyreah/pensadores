const express = require("express");

const ThoughtsController = require("../controllers/ThoughtsController");

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsController.dashboard);

// Rota responsável por redirecionar para página de cadastrar o pensamento
router.get("/thoughts-create", ThoughtsController.registerThought);

//Rota para CADASTRAR um pensamento no banco.
router.post("/thoughts/create", ThoughtsController.createThought);

router.get("/thoughts/edit/:id", ThoughtsController.showPageEditThought);
router.post("/thoughts/update/:id", ThoughtsController.updateThoughts);

//Rota para DELETAR um pensamento cadastrado escolhido pelo id.
router.post("/thoughts/remove/:id", ThoughtsController.deleteThoughts);

module.exports = router;
