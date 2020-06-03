
let obj1 = {}; // syntaxe litérale
let obj2 = new Object();
let obj3 = Object(); // non recommandé


let formateur = {};
console.log(formateur);

formateur.nom = "DEVOLDERE";
console.log(formateur);

formateur = {
    nom: "DEVOLDERE",
    prenom: "Mickaël",

    parler: function(_msg) {
        console.log(_msg);
    }
};

formateur.conduire = function() {
    console.log("Le formateur conduit")
}

console.log(formateur);
console.log(formateur.nom);
formateur.parler("Bonjour, aujourd'hui, JS");
formateur.conduire();

formateur2 = {
    nom: "CHATELOT",
    prenom: "Franck",
};