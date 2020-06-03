/**
 * Javascript: Conversions de types
 */ 

 
 // l'opérateur typeof permet de savoir quel type de données contient une variable
 let entier = 2;
 let typeEntier = typeof entier;
 console.log(entier + " est " + typeEntier);





/* CONVERSION "CHAINE" VERS "NUMERIQUE" */

chaine = "42.1337";

entier = parseInt(chaine); // 42
console.log(entier);

flottant = parseFloat(chaine); // 42.1337
console.log(flottant);

nombre = Number(chaine); // le format du nombre sera déterminé par le format de la chaine
console.log(nombre + " est " + (typeof nombre));

autreNombre = + chaine; // méthode alternative : notez la présence du "+" après le "="
console.log(autreNombre + " est " + (typeof autreNombre));

// Si la conversion échoue, la valeur "NaN" est retournée (NaN = "Not a Number")
// /!\ la valeur "NaN" est considérée comme un nombre /!\
chaine = "Bonjour";
chaineConvertie = parseInt(chaine);
typeChaineConvertie = typeof chaineConvertie;
console.log(chaineConvertie + " est " + typeChaineConvertie);




/* CONVERSION "NUMERIQUE" VERS "CHAINE" */

flottant = 1337.42;
chaine = String(flottant);
console.log(chaine + " est " + (typeof chaine));
// ou
chaine = flottant.toString();
console.log(chaine + " est " + (typeof chaine));




/* CONVERSION "BOOLEEN" VERS "STRING" */
let vrai = true;
let faux = false;
console.log(String(vrai));
console.log(String(faux));
console.log(vrai.toString());
console.log(faux.toString());




/* CONVERSION "BOOLEEN" VERS "NUMERIQUE" */
console.log(Number(vrai));
console.log(Number(faux));
