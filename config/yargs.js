const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Es la base de la tabla',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Muestra la tabla creada en pantalla',
        default: false,
        //demandOption: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Elegir el numero hasta el que deseas multiplicar'
    })
    .check((argv) => {
        if (isNaN(argv.b)) {
            throw 'LA BASE DEBE SER UN NUMERO';

        } else if (isNaN(argv.h)) {
            throw 'Se debe especificar un numero'
        }
        return true; //ES NECESARIO PARA PODER SEGUIR CON EL PROGRAMA 
    })
    .argv;
module.exports = argv;