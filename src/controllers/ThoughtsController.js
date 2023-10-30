// Importando o model thought 
const Thought = require("../model/Thought");

module.exports = {

// Função responsável por renderizar a página de dashboard
async dashboard(request, response){
    const thoughts = await Thought.findAll({ raw: true })
    return response.render("thoughts/dashboard", { thoughts });
},

async registerThought(request, response) {
    return response.render("thoughts/register");
},

async createThought(request, response) {
    const { title, description } = request.body

    const thoughts = await Thought.create({ title, description });

    try{
        if(thoughts) {
            return response.redirect("/thoughts/dashboard")
        }
    }catch(error) {
        console.error(error);
    }
},

async showPageEditThought(request, response){
    const { id } = request.params;

    const thought = await Thought.findOne({ where: { id: id}, raw: true});

    return response.render("thoughts/edit", { thought });
},

async updateThoughts (request, response){
    const { id } = request.params
    const { title, description }  = request.body

    const thoughts = await Thought.update(
        {
            title,
            description
        },
        {
            where: { id: id }
        }
    )
    try{
        if(thoughts) {
            return response.redirect("/thoughts/dashboard")
        }
    }catch(error){
        console.error(error)
    }

},


async deleteThoughts(request, response){
    const { id } = request.params

    const thought = await Thought.destroy({ where: { id: id}});

    try{
        if(thought) {
            return response.redirect("/thoughts/dashboard");
        }


    }catch(error){
        console.error(error);
    }
}

}


// A função create é responsável por criar ou inserir os dados.
    // Nesse cenário a função create()é responsável por cadastrar os pensamentos no banco de dados na tabela de thoughts(pensamentos).