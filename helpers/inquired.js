const inquired = require("inquirer");
const colors = require("colors");

const preguntas = [
    {
        type : "list",
        name : "opcion",
        message : "¿Qué desea hacer?",
        choices : ["opt1","opt2","opt3"]
    }
]

const inquiredMenu = async() =>{

    console.clear();

    console.log("======================".green);
    console.log("Seleccione un Objeto".green)
    console.log("======================\n".green);

    const opt = await inquired.prompt(preguntas);

    return opt; 


    


}

module.exports = {
    inquiredMenu
}