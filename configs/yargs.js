const argv = require("yargs").option("b",{
    alias : "base",
    type : "number",
    demandOption : true,
    description : "Es la base que se multiplica"
}).option("l",{
    alias : "listar",
    type : "boolean",
    demandOption : false,
    default : false,
}).option("h",{
    alias : "hasta",
    type : "number",
    demandOption : true,
    description: "Indica hasta que número operará la tabla"
})
.check((argv,options)=>{
    if(isNaN(argv.b )){
        throw "La base tiene que ser un número"
    }else return true
})
.argv;

module.exports = argv;