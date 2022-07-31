const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base, listar, hasta) => {
    try {
        let rs = '';
        let colored = '';
        for (i = 1; i <= hasta; i++) {
            colored += colors.yellow(base) + colors.red(' x ') + i + ' = ' + colors.gray(base * i) + "\n";
            rs += base + ' x ' + i + ' = ' + base * i + "\n";
        }
        if (listar) {
            console.log('==================================================='.cyan);
            console.log('Tabla del ' + colors.yellow(base));
            console.log('==================================================='.cyan);
            console.log(colored);
        }
        fs.writeFileSync('./tablas/archivo-tabla-' + base + '.txt', rs);
        console.log('archivo creado correctamente :D'.green);

    } catch (err) {
        throw err;
    }

}
module.exports = {
    crearArchivo
}