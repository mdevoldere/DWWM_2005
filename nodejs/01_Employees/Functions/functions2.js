function a(a, b){
    return a * b;
}

function b(a, b) {
    return a - b;
}

module.exports = {
    toto: a, // la fonction "a" est exportée sous le nom "toto"
    tata: b, // la fonction "b" est exportée sous le nom "tata"
};