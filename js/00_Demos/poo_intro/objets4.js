class Formateur
{
    constructor(_nom, _prenom) {
        this.nom = _nom;
        this.prenom = _prenom;
    }

    parler(_msg) {
        console.log("Le formateur " + this.nom + " dit: " + _msg);
    }


}

let formateur1 = new Formateur('DEVOLDERE', 'Mike');
let formateur2 = new Formateur('CHATELOT', 'Franck');
let formateur3 = new Formateur(null, undefined);


console.log(formateur1);
console.log(formateur2.nom);
console.log(formateur3);

formateur1.parler("Bonjour");
formateur2.parler("Bonjour");
formateur3.parler("Bonjour");


let formateurs = [
    new Formateur(),
    new Formateur(),
    new Formateur(),
    new Formateur(),
    new Formateur(),
];

formateurs.push(formateur3);

console.log(formateurs);