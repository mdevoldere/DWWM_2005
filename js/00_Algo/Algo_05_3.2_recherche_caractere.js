/**
 * Javascript: Rechercher le nombre d'occurrences d'une lettre dans une chaine de caractères.
 */

let str = "La chaine à tester."; // la recherche s'effectuera sur cette variable

let search = 'a'; // la lettre à rechercher dans la chaine ci-dessus


// Rappel: une chaine peut-être manipulée comme un tableau !


let lastIndex = str.length - 1; // (longueur du tableau - 1) = dernier index d'un tableau

let lastCharacter = str[lastIndex];  // cet index permet de récupérer le dernier caractère


let result = 0; // initialisation du résultat (nombre d'occurrence trouvée)


// si la chaine est vide
if(str.length < 1) {
    console.log('La chaine est vide (1) !');
    return false; // return dans le contexte global met fin au script
}

// si la chaine ne contient qu'un point (.), elle est considérée comme vide. 
if(str === '.') {
    console.log('La chaine est vide (2) !');
    return false;
}

// si la chaine ne se termine pas par un point
if(lastCharacter !== '.') {
    console.log('La chaine doit terminer par un point.');
    return false;
}

// Arrivé à ce point, la chaine est considérée "valide"
console.log('Chaine valide ! ');


// Parcours de la chaine, caractère par caractère
// Pour la recherche, 3 approches possibles dans la boucle (les 3 if)
// Le 1er if sera le plus rapide à l'exécution.
for(let i = 0; i < str.length; i++) {

    if(str[i] === search) { // si le caractère en cours correspond au caractère recherché
        result++; // incrémentation du résultat
    }

    //if(str[i].search('a') > -1) { // au tre méthode, même résultat
    //    result++;
    //}

    //if(str.charAt(i) === search) { // autre méthode, même résultat
    //    result++;
    //}
}

// La boucle for ci-dessus peut être raccourcie grâve à la méthode "split"
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split
// (nombre d'éléments retournés - 1) = le nombre d'occurences de "search" dans "str".

// result = str.split(search).length - 1; // résultat identique au for précédent




// Affiichage du résultat
if(result > 0) {
    console.log('La lettre ' + search + ' a été trouvée ' + result + ' fois.');
}
else {
    console.log('Pas trouvé !');
}
