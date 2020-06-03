// Javascript: boucles
// boucle do...while (faire...tant que) : structure de contrôle
// exécute un bloc de code en boucle tant qu'une condition renvoie vraie
// prérequis: comprendre et savoir manipuler: les conditions et la boucle while
// point d'attention: la condition doit obligatoirement renvoyer vrai à un moment pour sortir de la boucle et éviter les "boucles infinies"

var position = 0; // un entier

// Le fonctionnement est identique à while.
// La différence est que le bloc do {} est exécuté au minimum 1 fois (la condition est évaluée après le 1er passage).
do {
    console.log('Position: ' + position); // affichage de la variable "position"
    position++; // incrémentation
}
while(position < 10);


console.log("Boucle terminée");
