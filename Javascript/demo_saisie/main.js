
const readline = require('readline');

params = {
    input: process.stdin,
    output: process.stdout
};

const rl = readline.createInterface(params);

rl.question('Question ????', answer => {
    console.log('Vous avez répondu ' + answer);
    rl.close();
});
