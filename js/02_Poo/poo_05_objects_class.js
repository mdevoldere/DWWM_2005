/**
 * JAVASCRIPT : Introduction à la syntaxe Objet: l'approche pas classes
 * Prérequis: les bases, les fonctions, les références, notions POO dans un autre langage (classes, constructeurs, attributs et méthodes)
 * 
 * En Javascript, tout est objet.
 * Il est possible (et recommandé) de créer des objets adaptés au contexte de l'application à développer.
 * Par exemple, une personne, une voiture, une carte...
 * 
 * Un objet peut être nommé
 * Un objet peut contenir des attributs qui définissent son ÉTAT : un nom, un prénom, une couleur, une distance...
 * Un objet peut contenir des méthodes qui définissent ses COMPORTEMENTS : marcher(), courir(), changerCouleur()... 
 * 
 * Ce document utilise la syntaxe des classes. 
 * En Programmation Orientée Objet (POO), des modèles (les moules) sont utilisés.
 * Dans la plupart des langages "objet" (Java, PHP, C#...), les classes représentent ces moules. Ce sont des langages orientés "classe"
 * Javascript n'est pas un langage orienté "classe". Javascript est un langage orienté "prototype". 
 * En d'autres termes, en Javascript, les classes n'existent pas, mais une syntaxe orientée "classes" existe.
 * La suite de ce document traite la syntaxe des classes en Javascript.
 * Le prototypage et les différences entre "prototype" et "classe" seront abordés dans la suite du parcours.
 */


// Reprenons la syntaxe du script précédent (volontairement simplifié)
let formateur = { nom: "DEVOLDÈRE", prenom: "Mickaël", email: "mdevoldere@email.fr" } // création d'un objet anonyme avec 2 attributs (nom et prenom)
console.log(formateur);

// A chaque fois que je souhaite créer un objet avec la même structure, je dois réécrire le code complet...

let formateur2 = { nom: "CHATELOT", prenom: "Franck", email: "franck@chatelot.fr" }
console.log(formateur2);

/**
 * Si je dois en créer 50, à part dans une boucle, cela peut être fastidieux !
 * De plus, lorsque je vais manipuler mes objets, je souhaiterais m'assurer qu'ils ont tous la même structure (sont tous issus du même moule).
 * Je vais donc créer un "moule" qui représentera 1 formateur, une "classe". 
 * En Javascript, on parle de création d'un prototype "Formateur", plus concrètement, on créé un type "Formateur"
 * Les attributs de la "classe" sont définis dans le constructeur qui s'appelle "constructor".
 */

// Déclaration d'un nouveau type "Formateur"
class Formateur 
{
    /**
     * Constructeur: fonction spéciale automatiquement exécutée au moment de la création d'une nouvelle instance de la classe (ie: var f = new Formateur())
     * Dans le corps du constructeur, on initialise les attributs de l'objet.
     * la variable spéciale "this" est une référence vers l'objet lui même
     */
    constructor()
    {
        this.nom = "DEVOLDÈRE Mickaël";
        this.email = "mdevoldere@email.fr";
    }
}

// On peut maintenant créer des objets à partir du moule Formateur 

let f1 = new Formateur();

// une fois l'objet instancié, l'accès aux attributs et méthodes est identique à la syntaxe "objet litéral" (cf script précédent)

console.log(f1.nom);
console.log(f1.email);
f1.email = "test@email.eu";
console.log(f1.email);



// Déclaration d'un nouveau type "Responsable"
class Responsable 
{
    /**
     * Constructeur avec arguments
     * L'avantage est de pouvoir personnaliser l'objet dès sa création (cf après la classe)
     */
    constructor(_nom, _prenom)
    {
        this.nom = _nom;
        this.prenom = _prenom;
    }

    // ajout d'une méthode
    convoquer(_stagiaire) {
        console.log(this.prenom + " " + this.nom + " a convoqué " + _stagiaire);
    }

    // et une autre méthode qui renvoie une valeur
    info() {
        return this.nom + ", " + this.prenom + " (Responsable)";
    }
}


// création de responsables
r1 = new Responsable("Vertserre", "Annie", "r1@email.fr");
r2 = new Responsable("Ratif", "Luc", "r1@email.fr");

console.log(r1.nom);
r1.nom = "Bal";
console.log(r1.nom);

console.log(r2.info());

r1.convoquer("Dimitri");
r2.convoquer("Léo");
