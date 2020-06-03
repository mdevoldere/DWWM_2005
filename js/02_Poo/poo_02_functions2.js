/**
 * JAVASCRIPT : Fonctions : Syntaxes alternatives
 * Prérequis: Les fonctions
 * 
 * Une fonction peut-êre déclarée de différentes manières.
 * 
 * Dans le script précédent, la syntaxe "classique" est utilisée.
 * 
 * En utilisant une syntaxe alternative, mise à part la déclaration, les arguments et les retours de valeurs fonctionnent à l'identique.
 * 
 * Par contre, selon la déclaration, les accès et la portée des variables peuvent différer.
 */

// syntaxe classique
function hello() {
    console.log("Hello world !");
}

// Le code de la fonction est exécuté à chaque appel (ci-dessous, 3 appels = 3 affichages du messsage)
hello();
hello();
hello();



// syntaxe alternative 1
const hi = function() {
    console.log("Hi world !");
}

hi();
hi();
hi();



// syntaxe alternative 2 (fonctions fléchées)
// les arguments se placent dans les parenthèses entre le "=" et la "=>"
const bye = () => {
    console.log("Bye !")
}

bye();
bye();
bye();



// Exemple (les 3 fonctions suivantes fonctionnent à l'identique):

function add1(a, b) {
    return a + b;
}

const add2 = function(a, b) {
    return a + b;
}

const add3 = (a, b) => a + b; // :D

console.log(typeof add1 === 'function'); 
console.log(typeof add2 === 'function'); 
console.log(typeof add3 === 'function'); 

let c1 = add1(40, 2);
let c2 = add2(1330, 7);
let c3 = add3(3, 0.14);

console.log(c1 + ", " + c2 + ', ' + c3);