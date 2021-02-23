const fs = require('fs');

const writeTable = (name, content) => new Promise( resolve => {
    fs.writeFile(name, content, err => {
        if(err) throw err;
        const message = `${name} fue creado`;
        const result = { message, content, name}
        resolve(result);
    });
});

module.exports = {
    writeTable,
}