/**
 * JAVASCRIPT : Affichage dans la console
 * Prérequis: Variables
 * 
 * L'objet "console" permet d'interagir avec :
 * - le terminal qui exécute l'application nodejs 
 * - la console du navigateur
 */


/* Messages simples */
console.log("----- BASIC MESSAGES ----- ");
console.log("Hello World"); // affiche un message dans la console
console.info("Welcome"); // affiche un message d'information dans la console
console.warn("You are not logged in"); // affiche un message d'avertissement dans la console
console.error("Matrix Error. Need backup !"); // affiche un message d'erreur dans la console
console.debug("Debug message\n\n"); // affiche une information de débogage



/* Messages groupés */
console.log("----- GROUP MESSAGES ----- "); // niveau 0

console.group("Group 1"); // ouverture d'un groupe d'éléments (ie html = <ul>)
console.log("Item 1.1"); // ajout d'un élément dans le groupe (ie html = <li></li>)
console.log("Item 1.2"); // ajout d'un autre élément
console.groupEnd(); // fermeture du groupe 1 et retour au niveau supérieur (ie html = </ul>)

console.log("Outer level"); // retour au niveau 0

console.group("Group 2"); // ouverture d'un 2nd groupe d'éléments
console.log("Item 2.1"); 
console.log("Item 2.2"); 
console.group("Item 2.3 (subgroup)"); // ouverture d'un sous-groupe (à l'intérieur du groupe 2)
console.log("Item 2.3.1");
console.warn("Item 2.3.2"); // possible d'utiliser n'importe quel type de message (ici un warn)
console.error("Item 2.3.3"); // et ici une error
console.groupEnd(); // fermeture du sous-groupe et retour dans groupe 2
console.log("Item.2.4");
console.groupEnd(); // fermeture du groupe 2. Pensez à fermer tous les groupes ouverts !

console.log("Outer level\n\n"); // retour au niveau 0


/* Afficher des objets */
console.log("----- OBJECT DEBUG MESSAGES ----- ");

var motd = 'Welcome to our App'; // une simple chaine

const roles = [ 'guest', 'member', 'admin' ]; // création d'un tableau

const usr = { id: 1, name: "MDevoldere", role: 'admin' }; // création d'un objet


console.log(usr); // affiche le contenu de l'objet
console.log('MOTD: ' + motd); // concaténation avec une variable de type string
console.log('User (type): ' + usr + ' !!!'); // concaténer une chaine et un objet affiche le type de l'objet
console.log('User (data): ', usr, ' !!!'); // utiliser la virgule pour séparer chaines et objets affiche le contenu de l'objet au lieu du type
console.log('User Name: ' + usr.name); // accès à un attribut de usr

console.log('Roles (items): ' + roles); // concaténation avec un tableau (array), chaque élément du tableau sera directement intégré à la chaine
console.log('Roles: (structure)', roles); // utiliser la virgule pour afficher la structure du tableau
console.log('Role 1: ' + roles[1]); // accès à un élément du tableau