// Javascript: boucles
// boucle while (tant que) : structure de contrôle
// exécute un bloc de code en boucle tant qu'une condition renvoie vraie
// prérequis: comprendre et savoir manipuler les conditions
// point d'attention: la condition doit obligatoirement renvoyer faux à un moment pour sortir de la boucle et éviter les "boucles infinies"

var position = 0; // un entier

// Tant que la valeur de la variable "position" est inférieure à 10, on exécute le bloc de code suivant l'instruction while
// Dans ce bloc, on incrémente la variable "position".
// Une fois le bloc exécuté, la condition dans le "while" est réévaluée. 
// Tant que la condition renvoie vrai, on exécute le bloc à nouveau.
// Dès que la condition renvoie faux, on sort de la boucle et le programme se poursuit.
// si on n'incrémente pas "position" dans le bloc exécuté, la condition ne renverra jamais "faux" et la boucle sera exécutée à l'infini...
while(position < 10) 
{
    console.log('Position: ' + position); // affichage de la variable "position"
    position++; // incrémentation
}

console.log("--- Boucle 1 terminée");


// Tout comme pour les structures conditionnelles, l'évaluation peut concerner plusieurs conditions combinées
// Rappel: S'assurer que l'évaluation des conditions permette une sortie de la boucle à un moment
while(position > 1 && position < 20 && position !== 15) 
{
    console.log('Position: ' + position); // affichage de la variable "position"
    position++; // incrémentation
}

console.log("--- Boucle 2 terminée");