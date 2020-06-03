// Javascript: collections
// collections: Array (collection indexée) + Int32Array (exemple de collection fortement typée)

// Lorsqu'on doit manipuler plusieurs élements de la même famille,
// Il peut être fastidieux de créer une variable par élément.
// Une collection est une structure de données permettant de résoudre ce problème.
// Au lieu de créer une variable par élément, on "stocke" chaque élément dans une même collection.
// On manipule donc la collection pour accéder aux éléments, en ajouter, ou en supprimer.

// 2 grandes familles de collections :
// - Les collections non-typées : la collection accpete tout type de données
// - Les collections fortement typées : la collection n'accepte qu'un seul type de données (int, string, DateTime etc...)


// Array (tableau) : la collection générique en Javascript
// Array accepte tout type de données et est donc faiblement typée.

// initialiser un tableau (les 3 instructions suivantes produisent le même effet)

var collection = ['a1', 'a2', 'a3']; // déclaraion litérale
var collection2 = Array('a1', 'a2', 'a3'); // déclaration procédurale
var collection3 = new Array('a1', 'a2', 'a3'); // déclaration objet

var collection4 = new Array(3); // déclarer un tableau de longueur 3 (chaque élément est vide)

console.log('Collection #1', collection);
console.log('Collection #2', collection2);
console.log('Collection #3', collection3);
console.log('Collection #4', collection4);

// Même si les collections sont identiques, chacune est indépendante
// Pour s'assurer qu'il ne s'agit pas du même objet en mémoire, on les compare
console.log(collection === collection2); // renvoie true si les 2 variables référencent le même objet en mémoire
console.log(collection === collection3); 
console.log(collection2 === collection3); 


// On utilise la position des éléments dans la collection pour y accéder.
// Les collections sont indexées à partir de 0
// Le 1er élément est accessible à l'index "0", le 2ème à l'index "1" et ainsi de suite.
// Utiliser le nom de la variable qui contient la collection suivi de la position entre crochets.


// accéder à un élément
var element = collection[0]; // Accéder au 1er élément du tableau référencé par la variable collection
var element3 = collection[2]; // puis au 3ème
console.log('collection[0] = ', element);
console.log('collection[2] = ', element3);


// ajouter un élément à la fin de la collection
collection.push('a4');
console.log('push a4', collection);
// l'élement peut provenir d'une variable
let maVar = 'a5';
collection.push(maVar);
console.log('push a5', collection);


// ajouter un élément au début de la collection
collection.unshift('a0');
console.log('unshift a0', collection);


// supprimer un élément 
collection.splice(2, 1); // suprime 1 élément à partir de l'index 2
console.log('splice(2, 1)', collection);

collection.splice(3, 2); // suprime 2 éléments à partir de l'index 3
console.log('splice(3, 2)', collection);


// remplacer un élément par un autre (idem que supprimer ci-dessus mais en renseignant un 3ème paramètre)
collection.splice(2, 1, 'b1'); // remplace 1 élément à partir de l'index 2 par la valeur du 3ème paramètre
console.log('splice(2, 1, "b1")', collection);

collection.splice(0, 2, 'b2'); // remplace 2 éléments à partir de l'index 0 par la valeur du 3ème paramètre
console.log('splice(0, 2, "b2")', collection)



// supprimer le dernier élément d'une collection :
collection.pop();
console.log('pop', collection);



// Toutes les fonctions de manipulation de tableaux (section "Méthodes"): 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array