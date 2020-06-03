/**
 * JAVASCRIPT : Introduction à la syntaxe Objet
 * Prérequis: les bases, les fonctions, les références
 * 
 * En Javascript, tout est objet.
 * Il est possible (et recommandé) de créer des objets adaptés au contexte de l'application à développer
 * 
 * Un objet peut être nommé
 * Un objet peut contenir des attributs qui définissent son ÉTAT : un nom, un prénom, une couleur, une distance...
 * Un objet peut contenir des méthodes qui définissent ses COMPORTEMENTS : marcher(), courir(), changerCouleur()... 
 * 
 * Ce document utilise la syntaxe litérale (objets anonymes)
 * Les scripts suivants aborderonnt l'approche par classes et le prototypage
 */


// création d'un objet anonyme (sans nom) vide (les 3 syntaxes produisent le même effet):
let obj1 = {}; // syntaxe litérale recommandée pour les objets anonymes
let obj2 = new Object(); // syntaxe objet
let obj3 = Object(); // non recommandé

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log();

// création d'un objet anonyme représentant un formateur
let formateur = {};
console.log("Formateur: ", formateur);

// pour accéder à l'objet, on utilise la variable qui le référence (ici "formateur")
// ajout d'un attribut "nom"
formateur.nom = "DEVOLDÈRE";
console.log("Formateur: ", formateur); // l'objet contient désormais un attribut "nom"

// lire un attribut (par défaut, tous les attributs d'un objet JS sont "public")
console.log("Le nom du formateur est: " + formateur.nom);

// ajout d'une méthode
formateur.parler = function(_message) {
    // Je suis à l'intérieur de mon objet.
    // Pour accéder aux éléments de l'objet en interne, on utilise le mot clé "this"
    console.log("Le formateur " + this.nom + " dit: " + _message);
}

console.log(formateur);

// et utilisation de celle-ci
formateur.parler("Bonjour à toutes et à tous.");
formateur.parler("Aujourd'hui, Javascript !");
console.log();


// Woh Woh Woh, c'est quoi ce "this" qui traine dans le code de la méthode ?
// Lorsqu'un objet est créé, on y accède par la variable qui le référence (ci-dessus, la variable "formateur")
// Lorsque je suis à l'intérieur de l'objet (au niveau du code), j'accède à l'objet courant avec la variable spéciale "this"
// la suite permettra de comprendre un peu mieux...

// Lorsqu'on crée un objet, on connait en général sa structure.
// Il est donc recommandé de construire l'objet avec tous ses attributs et méthodes directement.
// Reproduisons un objet similaire au précédent en le complétant dès sa déclaration.


// dans un objet litéral (dans le code de l'objet uniquement):
// - l'opérateur d'affectation des éléments (attributs, méthodes) est ":" (deux points)
// - les éléments (attributs, méthodes) sont séparés par une VIRGULE
responsable = {

    nom: "ROCHE", // création d'un attribut "nom"

    parler: function(_message) {
        
        let output; // cette variable est locale et n'existe que le temps d'exécution de la méthode

        // Dans une méthode, vous pouvez ajouter des structures (if..else, while, for...)

        if(_message.length > 0) { // si la longueur de la chaine "_message" est supérieure à 0
            // je suis ici dans une méthode de l'objet, j'accède à ses attributs et autres méthodes avec "this"
            output = "Le reponsable " + this.nom + " dit: " + _message;
        }
        else {
            output = "Le reponsable " + this.nom + " parle pour ne rien dire...";
        }
        
        console.log(output);
    }

};

console.log(responsable);
console.log(responsable.nom);
responsable.parler("Bienvenue au CRM !");
responsable.nom = "KUNTZ";
responsable.parler("et bienvenue à Mulhouse !");
responsable.nom = "USELESS";
responsable.parler(""); // envoi d'une chaine vide pour tester le "else" dans la méthode



/** Pour vous exercer et avant de passser à la suite :
 * 
 * 1) Créer un objet litéral représentant une personne et le tester
 *      - attributs: nom, prénom, date de naissance, slogan
 *      - méthodes:  afficherSlogan(), modifierSlogan()
 * 
 * 2) Créer un objet litéral représentant un véhicule terrestre et le tester
 *      - attributs: typeVehicule (voiture, camion, vélo...), marque, modele, vitesseMax
 *      - méthodes: avancer(), reculer(), stopper()
 */