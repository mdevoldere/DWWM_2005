/**
 * JAVASCRIPT : Constantes et portée des variables
 * Prérequis: variables, conditions
 * En Javascript, une variable se déclare avec le mot clé 'var' ou 'let' suivi du nom de la variable.
 *      La différence entre 'let' et 'var' se situe au niveau de leur portée.
 *      La portée d'une variable détermine quelles blocs de code du programme peuvent accéder à ladite variable.
 * 
 * Un bloc de code est délimité par des accolades:  { // Je suis dans un bloc de code }
 * Lorsqu'on parle de blocs de code, on parle de "contexte". 
 * Si du code ne se situe dans aucun bloc de code, il se situe dans ce qu'on appelle "le contexte global"
 * 
 * Une variable est accessible dans le contexte qui la définit. Ce contexte est définit par le mot clé utilisé au moment de la délcaration de la variable
 * 
 * Le mot clé "let" a une portée "bloc"
 *      La variable est accessible uniquement dans le bloc de code (et sous blocs) dans laquelle elle a été déclarée
 * 
 * Le mot clé "var" a une portée "fonction" (les fonctions sont abordées au 2ème module)
 *      La variable est accessible uniquement dans la fonction dans laquelle elle a été déclarée
 * 
 * Déclarer une variable sans mot clé revient à la rendre globale (accessible dans tout le code) !
 * 
 * Le mot clé "const" a une portée "bloc" et est particulier, il permet de créer une "constante"
 *      Une constante est obligatoirement initialisée avec une valeur 
 *      Une fois initialisée, il n'est plus possible de modifier la référence vers la valeur en mémoire définie à l'initialisation
 */

// let : portée "bloc"
// var : portée "fonction"
// const : obligatoirement initialisé à la déclaration. la référence ne peut plus être modifiée après initialisation.
// console.log(var): affiche le contenu de la variable passée en argument dans la console


// créons un bloc de code qui contient 2 variables et 1 constante

{
    var hello = "hello world";
    let bye = "good bye";
    const lectureSeule = "Je suis en lecture seule";
}

// la variable "hello", initialisée avec "var" est accessible en dehors du bloc.
console.log(hello);

// la variable "bye", initialisée avec "let" n'existe pas en dehors du contexte (bloc de code) dans lequel elle a été déclarée.
// décommenter la ligne suivante affichera une erreur dans la console "variable indéfinie"
// console.log(bye); 

// idem pour la constante "lectureSeule", inaccessible... car "const" a une portée "bloc" comme "let"
// console.log(lectureSeule);



// tentons maintenant l'inverse...

var nom = "Devoldère";
let prenom = "Mickaël";
const espece = "humain";

// ouverture d'un bloc de code, les 3 variables y seront accessibles
{
    console.log(nom);
    console.log(prenom);
    console.log(espece);
}

// dernier test ... 
// si un console.log() est commenté, c'est qu'il appelle une variable inaccessible
// bonne lecture, héhé :)

{
    console.group("BLOC 1");

    var product = "XBOX";
    let price = 199;
    const pi = 3.14;
    
    console.log(product);
    console.log(price);
    console.log(pi);

    {
        console.group('BLOC 2');

        var employee = "Maria Dupontel";
        let hiredate = "2020/02/07";
        const job = "Data Scientist";

        console.log(product);
        console.log(price);
        console.log(pi);

        console.log(employee);
        console.log(hiredate);
        console.log(job);


        {
            console.group('BLOC 3');

            var height = 1.337;
            let width = 42;
            const weight = 43.337;

            console.log(product);
            console.log(price);
            console.log(pi);

            console.log(employee);
            console.log(hiredate);
            console.log(job);

            console.log(height);
            console.log(width);
            console.log(weight);

            console.groupEnd();
        }

        console.log(height);
        //console.log(width);
        //console.log(weight);

        console.groupEnd();
    }

    console.log(employee);
    //console.log(hiredate);
    //console.log(job);
    console.log(height);
    //console.log(width);
    //console.log(weight);

    console.groupEnd();
}

console.log('CONTEXTE GLOBAL');
console.log(product);
//console.log(price);
//console.log(pi);

console.log(employee);
//console.log(hiredate);
//console.log(job);

console.log(height);
//console.log(width);
//console.log(weight);