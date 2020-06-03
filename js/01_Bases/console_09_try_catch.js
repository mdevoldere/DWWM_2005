/**
 * Javascript: Gestion des erreurs (introduction)
 * Lorsqu'une instruction javascript rencontre une erreur d'exécution, le script en cours est arrêté.
 * Une erreur lève "une exception", autrement dit: un évènement inatendu, un BUG !
 * Lorsqu'une portion de code peut éventuellement lever une exception, le développeur peut (et doit) la gérer.
 * J'insiste: même si, dans un bloc de code, les probabilités qu'une erreur survienne sont très faibles, il faut prévoir l'éventualité !
 * La plupart des langages (dont Javascript) dispose d'un mécanisme pour gérer les exceptions, le bloc "try...catch".
 */ 



/* Si l'instruction suivante est décommentée, une erreur s'affiche à l'exécution et le script est arrêté (la suite du code n'est pas exécutée) */

// console.log(prenom); // tentative d'affichage d'une variable inexistante


// lancer l'instruction dans un bloc try...catch permet de prendre le contrôle si une exception est levée
// bloc 'try' : on essaie d'exécuter du code
// si tout se passe bien, le bloc 'catch' est ignoré
// si une exception est levée, le code du bloc 'catch' est exécuté et le programme se poursuit
try {
    console.log(prenom); // tentative d'affichage d'une variable inexistante
}
catch {
    console.log("erreur");
}

console.log("Le programme continue...");


// 'catch' peut accepter un argument. 
// s'il est renseigné, la variable associée contiendra les données de l'exception levée dans le bloc 'try'
try {
    console.log(prenom);
}
catch(exception) { // l'argument est renseigné, les données de l'erreur sont accessibles
    console.log("erreur: " + exception); // affichage du message lié à l'erreur
}

// L'exception contient différentes données
try {
    console.log(prenom);
}
catch(exception) { 
    console.log(exception.toString()); // affichage du type d'erreur + message lié à l'erreur
    console.log("Nom de l'exception: " + exception.name); // affichage du type d'erreur
    console.log("Message de l'exception: " + exception.message); // affichage du message lié à l'erreur
    console.log("Pile d'appel: " + exception.stack); // affichage complet + pile d'appel
}