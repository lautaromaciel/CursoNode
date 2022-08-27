const fs = require("fs");
const colors = require("colors");

const crearArchivo = (base,listar,hasta)=>{

    return new Promise((resolve,reject)=>{

        try{
            let salida = "";
            let consola = "";
            for(let i = 1; i <= hasta; i++){
                salida += `${base} * ${i} = ${base*i}\n`;
                consola += `${colors.yellow(base)} * ${colors.yellow(i)} = ${colors.green(base*i)}\n`;
            }

            if(listar == true){
                console.log(consola);
            }

        
            let nombreArchivo = `tabla-${base}.txt`;
        
            fs.writeFileSync(`./salida/${nombreArchivo}`, salida);

            resolve(nombreArchivo);
        }catch(err){
            reject(console.log(err));
        }
        
    })

}

const crearArchivo2 = async (base)=>{

    try{
        let salida = ""
        for(let i = 1; i <= 10; i++){
            salida += `${base} * ${i} = ${base*i}\n`;
        }
    
        let nombreArchivo = `tabla-${base}.txt`;
    
        fs.writeFileSync(nombreArchivo, salida);
        return nombreArchivo;
    }catch(err){
        throw err;
    }
    

}



module.exports = {
    crearArchivo,
    crearArchivo2
}