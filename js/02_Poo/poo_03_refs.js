/**
 * JAVASCRIPT : Valeurs et Références
 * Prérequis: un café ou un thé
 */

 
function testValeur(_input) {
    _input = 'Modifié !!!';
}

let message = 'Original';

console.log(message);

testValeur(message);

console.log(message); // non modifié



function testRef(_input)
{
   _input = ['b1'];
}

var tableau = ['a1', 'a2', 'a3'];

console.log(tableau);

testRef(tableau);

console.log(tableau); // non modifié




 
function testRef_item(_input)
{
   _input[0] = 'b1';
}

tableau = ['a1', 'a2', 'a3'];

console.log(tableau);

testRef_item(tableau);

console.log(tableau); // modifié !!!

 