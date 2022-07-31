console.clear();
const argv = require('./config/yargs');
const {crearArchivo} = require('./helpers/multiplicar');
crearArchivo(argv.b, argv.l, argv.h)
    .then(succ => console.log(succ))
    .catch(err => err);
