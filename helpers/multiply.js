const { blue } = require('colors');

const multiply = a => b => a * b;

const getMultiplicationTable = base => limit => fn => {
    let output = '';
    for(let i = 1; i <= limit; i++) {
        const result = fn(base)(i);
        const resultText = `${base} X ${i} = ${result}\n`;
        output += resultText;
    }
    return output;
}

module.exports = {
    multiply,
    getMultiplicationTable
}