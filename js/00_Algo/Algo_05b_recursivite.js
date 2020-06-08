/**
 * Algorithme récursif de calcul du produit de 2 entiers naturels a et b
 * Les seules instructions de base permises sont: 
 * - Somme de 2 entiers a et b : (a + b)
 * - Retrait de 1 à un entier a : (a - 1)
 * - Comparaison entre un entier a et 0 : (a === 0)
 * @param int a 
 * @param int b 
 */
function produit_recursif(a, b) {
    if(a === 0) {
        return 0;
    }
    return (produit_recursif(a-1, b) + b); 
}

function produit_recursif_alt(a, b) {
    if (b == 0) {
        return 0;
    }
    return a + produit_recursif(a, b - 1);
}

console.log(produit_recursif(0,30));
console.log(produit_recursif(30,0));
console.log(produit_recursif(2,3));
console.log(produit_recursif(3,2));
console.log(produit_recursif(4,9));
console.log(produit_recursif(9,4));