const {multiply, getMultiplicationTable} = require('./helpers/multiply');
const {writeTable} = require('./helpers/write-table');
const argv = require('./config/yargs');

require('colors');

const output = getMultiplicationTable(argv.b)(argv.q)(multiply);

writeTable(`./output/table-${argv.b}.txt`, output)
    .then( result => {
        if(argv.l) {
            console.log(result.content.yellow);
        }
        console.log(result.message.rainbow);
    })
    .catch( err => console.log(err) )
