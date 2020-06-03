/**
 * JAVASCRIPT : Structures conditionnelles
 * Prérequis: variables & expressions
 * 
 * Une condition est une expression booléenne (renvoie toujours vrai ou faux).
 * les conditions utilisent principalement les opérateurs de comparaison (==, ===, >, <, >=, <=, !=, !==)
 * les conditions se combinent entre elles grâce aux opérateurs logiques (&&, ||, AND, OR)
 */


let entier = 1; // valeur de test


let condition = (entier === 1); // si entier est égal à 1 alors renvoie vrai sinon renvoie faux.
console.log(condition);

condition = (entier > 1); // si entier est strictement supérieur à 1 alors renvoie vrai sinon renvoie faux.
console.log(condition);


// il est possible de combiner plusieurs conditions en utilisant les opérateurs logiques (ET / OU)...

condition = (entier > 1) && (entier < 5); // si les 2 conditions renvoient vrai alors renvoie vrai sinon renvoie faux
console.log(condition);

condition = (entier > 1) || (entier < 5); // si au moins 1 des 2 conditions renvoie vrai alors renvoie vrai sinon renvoie faux
console.log(condition);

// ... d'en combiner autant que l'on souhaite (restons toutefois raisonnable)....
condition = (entier >= 1) && (entier < 5) || (entier === 42) || (entier === 1337); 
console.log(condition);

// ... et de créer des groupes en les encapsulant dans un ensemble (parenthèses)
// les groupes sont évalués individuellement
condition = ((entier >= 1) && (entier < 5) || (entier === 42)) || (entier === 1337); // les 3 premieres conditions seront évaluées ensemble
console.log(condition);


// Les conditions sont généralement utilisées afin de déterminer quel code exécuter.
// Une ou plusieurs conditions sont évaluées, si lévaluation renvoie vrai, un bloc de code est exécuté, sinon le programme ignore le bloc et se poursuit.
// On parle alors de "structures conditionnelles"
// Rappel: un bloc de code est délmité par '{' et '}'.

var valeur = 42;

if(valeur === 42) { // si "valeur" vaut 42, le code se trouvant dans le bloc suivant est exécuté, sinon le bloc est ignoré
    console.log("Bonne réponse");
}
else { // sinon (cas par défaut), le bloc de code suivant est exécuté
    console.error("Mauvaise réponse");
}


// il est possible de gérer plusieurs cas...

valeur = 1337;

if(valeur === 42) { // si "valeur" vaut 42
    console.log("Bonne réponse");
}
else if(valeur === 1337) { // sinon si "valeur" vaut 1337
    console.warn("Réponse de L33t");
}
else { // sinon (cas par défaut)
    console.error("Mauvaise réponse");
}

// ... qui peuvent gérer des conditions combinées

valeur = 5000;

if(valeur === 42 || valeur > 42000) { // si "valeur" vaut 42 ou est supérieure à 42000 
    console.log("Bonne réponse");
}
else if(valeur === 1337 || valeur > 133700) { // sinon si "valeur" vaut 1337 ou est supérieure à 133700
    console.warn("Réponse de champion");
}
else if((valeur + 2 * 4) === (valeur * 2 / 4)) { // si les 2 opérations retournent le même résultat
    console.log("Incroyable !");
}
else { // sinon (cas par défaut)
    console.error("Mauvaise réponse");
}


