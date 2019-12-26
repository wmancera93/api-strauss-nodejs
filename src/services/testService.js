const util = require('util');
const exec = util.promisify(require('child_process').exec);

let methods = {};

methods.executeTerminal = async (excecute) => {
    try {
        const { stdout, stderr } = await exec(excecute);
        return { stdout, stderr };
    }
    catch (e) {
        console.error('!!!Error en la ejecución!!!', e);
    };
};

module.exports = methods;

