const {crearArchivo, crearArchivo2} = require("./helpers/multiplicar");
const argv = require("./configs/yargs");
const colors = require("colors");



console.clear();

// const [, , arg3 = "--base=9"] = process.argv;

// const [,base] = arg3.split("=");

// console.log(base);

console.log(argv);
let base = argv.base;
let listar = argv.listar;
let hasta = argv.hasta;



crearArchivo(base,listar,hasta).then(archivo => console.log("se creó el archivo: ", archivo.blue))

// crearArchivo2(base).then(console.log);




