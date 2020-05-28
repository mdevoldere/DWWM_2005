// importer le module 'readline' dans la constante 'readline'
const readline = require('readline');

// paramètres pour le module
params = {
    input: process.stdin, // les saisies utilisateur proviennent du terminal (process.stdin)
    output: process.stdout, // les messages seront affichés dans le terminal (process.stdout)
};

// création d'un objet Readline avec les paramètres ci-dessus
const rl = readline.createInterface(params);

// Un message est affiché dans "output" et attend une réponse de l'utilisateur.
// La réponse arrive dans la variable "answer" qui peut être traitée dans le bloc de code suivant la flèche (=>).
// L'appel à 'rl.question' est asynchrone (le code se poursuit, la réponse est traitée quand l'utilisateur a validé sa saisie)
rl.question("Quel est votre nom ????\n", answer => {
    console.log('Votre nom est: ' + answer);
    rl.close(); // appel à la méthode "close" pour fermer le curseur (sinon l'appel reste bloqué)
});


console.log("Je suis plus rapide que l'utilisateur !");