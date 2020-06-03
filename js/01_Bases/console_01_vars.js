/**
 * JAVASCRIPT : Variables
 * Prérequis: *
 * 
 * Une variable est un concept qui relie un identifiant (le nom de la variable) à une valeur stockée en mémoire
 * En d'autres termes, une variable "référence" une valeur en stockée mémoire (cette notion de référence est importante)
 * La valeur d'une variable est... variable (d'où son nom^^) et pourra donc évoluer durant l'exécution du programme
 * 
 * En Javascript, une variable se déclare avec le mot clé 'var' ou 'let' suivi du nom de la variable.
 * La différence entre 'let' et 'var' est documentée dans la partie "04_let_var_const"
 * 
 * il est possible de déclarer une variable: 
 * - en déclarant son nom mais sans lui assigner de valeur
 * - en déclarant son nom et en lui assignant une valeur directement
 * 
 * une fois déclarée, on accède à la variable (pour la lire ou modifier sa valeur) par son nom sans utiliser les mots clés let et var
 * 
 * Il existe également des variables "spéciales" déclarées avec le mot clé "const". Ce sont les "constantes".
 * Une constante est obligatoirement initialisée avec une valeur
 * Une fois initialisée, il n'est plus possible de modifier la référence vers la valeur en mémoire définie à l'initialisation
 * Les constantes sont documentées dans la partie 04.
 */

console.log("Hello world"); // affiche "Hello world" dans la console


// Les différents types de déclaration
let variable1 = 1;
var variable2 = 2;
let variable3;
let variable4;
// modifications des valeurs
variable3 = 3;
variable4 = variable3; // une variable peut prendre la valeur d'une autre variable
variable3 = 9;

console.log(variable1); // affiche le contenu de la variable
console.log(variable2);
console.log(variable3);
console.log(variable4);


/**
 * Types de variables principaux: booléen, int, long, float, double, string, Array, Object, function
 * Il exsite 2 grandes familles de variables :
 * - Les variables type "valeur", généralement les types "simples" (nombres, chaines de caractère et structures)
 * - Les variables type "référence" (les objets et tous les types complexes)
 * Ces notions de valeurs et références seront approfondies dans le module "02_POO"
 * */


//booléen : ne peut prendre que 2 valeurs : true ou false (vrai ou faux)
let vraiOuFaux = true;
console.log(vraiOuFaux); // affiche "true" dans la console
let typeBool = typeof vraiOuFaux; // On peut vérifier le type d'une variable grâce à typeof
console.log(typeBool);


// nombre entier
let entier = 1;
console.log(entier); // affiche "1" dans la console
console.log(typeof entier);


// nombre à virgule
let flottant = 1.337;
console.log(flottant);
console.log(typeof flottant); // lecture du type de la variable


// chaine de caractères (texte)
let chaine = "Hello World";
console.log(chaine);
chaine = "Hi !"; // modification du contenu de la variable
console.log(chaine);
console.log(typeof chaine);


// tableau (collection de valeurs) (plus d'infos dans la partie 08)
let tableau = ['Hello', 'World']; // Accès aux éléments via leur index (0 = 1er élement, 1 = 2ème élement, etc...)
console.log(tableau);
console.log(tableau[0]); // lecture de la valeur du 1er élément
tableau[0] = "Mike"; // modification de la valeur du 1er élément
console.log(tableau[0]); 
console.log(typeof tableau);


// objet (plus d'infos dans le module 02_POO)
let objet = { id: 2, text: "Welcome" }; // création d'un objet litéral avec 2 attributs: id et text 
console.log(objet);
console.log(objet.text); // lecture de la valeur de l'attribut "text" de l'objet précédent
objet.text = "Please login"; // modification de la valeur de l'attribut "text" de l'objet précédent
console.log(objet.text); 
console.log(objet); // l'objet a bien été modifié !
console.log(typeof objet);
console.log(typeof objet.id);
console.log(typeof objet.text);


/**
 * Expressions & Concaténation
 * Les variables acceptent toute expression valide
 * Une expression est une portion de code retournant une valeur.
 * 1 est une expression renvoyant la valeur 1
 * 1+1 est une expression renvoyant la valeur 2
 * La concaténation permet d'insérer des variables dans une chaine de caractères
 * Les éléments sont alors séparés par le signe "+"
 */

console.log("--- Expressions --- "); 

var calcul = 1 + 1;
console.log(calcul); // affiche 2

calcul = calcul * 5;
console.log(calcul); // affiche 10

calcul = (calcul * calcul / 2.5); // encapsuler les opérations aritmétiques dans des parenthèses est une bonne pratique
console.log(calcul); // affiche 40 (10 * 10 / 2.5)


console.log("--- Concaténation --- "); 

var resultat = 'Le résultat du calcul précédent est: ' + calcul; // insertion de la valeur de la variable "calcul" à la fin d'une chaine
console.log(resultat);
resultat = 'La valeur ' + calcul + ' est le résultat attendu'; // insertion de la valeur de la variable "calcul" au sein d'une chaine
console.log(resultat);