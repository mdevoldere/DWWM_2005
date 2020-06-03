
function testValeur(_message) {
    _message = "modifié";
}

var test = "Non modifié !";

testValeur(test);

console.log(test); // 

function testArray(_tableau) {
    _tableau = ["b1"];
}

var test2 = ['a1', 'a2'];
var arr = new Array();

testArray(test2);
testArray(arr);

console.log(test2);
console.log(arr);


function testArrayItem(_tableau) {
    _tableau[0] = 'b1';
}

testArrayItem(test2);

console.log(test2);


function generateArray(_tableau) {
    let result = ['c1', 'c2'];
    result.push(_tableau[1]);
    return result;
}


var test3 = generateArray(test2);
console.log(test3);

//var o = new generateArray(test2);