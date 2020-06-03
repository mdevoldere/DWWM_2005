/**
 * JAVASCRIPT : Fonctions
 * Prérequis: *
 * 
 * Une fonction désigne en programmation un « sous-programme » permettant d'effectuer des opérations répétitives. 
 * Au lieu d'écrire le code complet autant de fois que nécessaire, on crée une fonction que l’on appellera pour l'exécuter, 
 * ce qui permet d'alléger le code, le rendre plus lisible. L'utilisation des fonctions permet de "factoriser" le code.
 * 
 * En Javascript, une fonction : 
 *  - est un objet
 *  - a une porté "bloc" (même règles que "let")
 *  - peut accepter un ou plusieurs arguments
 *  - peut éventuellement renvoyer une valeur
 * 
 * 
 * Il est possible de déclarer une fonction: 
 * - sans argument (ex: function test() {})
 * - avec 1 ou plusieurs arguments (ex: function test(id, name) {})
 * 
 * une fois déclarée, on accède à la fonction par son nom sans utiliser le mot clé 'function'
 * 
 */

// fonction simple qui affiche un message
function hello() {
    console.log("Hello world !");
}

// Le code de la fonction est exécuté à chaque appel (ci-dessous, 3 appels = 3 affichages du messsage)
hello();
hello();
hello();


// une fonction peut retourner une valeur grâce à l'instruction "return"
function welcome() {
    return "Welcome !"; // retourne la valeur qui suit l'instruction return
}


// une valeur retournée par une fonction peut-être par exemple récupérée dans une variable
let message = welcome(); 
console.log(message);


// une fonction peut accéder aux variables externes qui ont été déclarées 
// - AVANT la fonction
// - Dans un bloc PARENT
let var1 = 1;
var var2 = 2;
const var3 = 3;

function testVars()
{
    console.log(var1);
    console.log(var2);
    console.log(var3);
}

testVars();


// une fonction peut accepter 1 argument (ou paramètre)
// les arguments sont des variables que l'on va "transmettre" au code d'une fonction
function talk(_message) {
    console.log("You say: " + _message); 
}

talk("Please wash your hands !");
talk("Please wash your hairs !");


// une fonction peut accepter, 0, 1 ou plusieurs arguments
function chat(_username, _message) {
    console.log(_username + ": " + _message); 
}

chat("Mike", "Hi there !");
chat("Cindy", "Hey, how are you ?");
chat("Mike", "Bad day, i have to learn Javascript :(");
chat("Paul", "HAHAHA, welcome to the web, a fantastic world :)))");
