// Importando o model thought 
const Thought = require("../model/Thought");

module.exports = {

async createThought(request, response) {
    const { title, description } = request.body
    const thoughts = await Thought.create({title, description});

    return response.json(thoughts);
},

async findAllThoughts(request, response) {
        const thoughts = await Thought.findAll({ raw: true })

        return response.json(thoughts)
},

async findThoughts(request, response){
    const { id } = request.params

    const thought = await Thought.findOne({ where: {id: id }});

    return response.json(thought)
},

async updateThoughts (request, response){
    const { id } = request.params
    const { title, description }  = request.body

    const thought = await Thought.update(
        {
            title,
            description
        },
        {
            where: { id: id }
        }
    )

    return response.json({message: "Usuario selecionado foi atualizado com sucesso"})
},


async deleteThoughts(request, response){
    const { id } = request.params

    const thought = await Thought.destroy({ where: { id: id}});

    return response.json({ message: "Usuario deletado com sucesso "})
}

}


// A função create é responsável por criar ou inserir os dados.
    // Nesse cenário a função create()é responsável por cadastrar os pensamentos no banco de dados na tabela de thoughts(pensamentos).