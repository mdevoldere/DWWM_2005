
function hello() {
    console.log("Hello Wolrd !");
}

hello();
hello();

function welcome() {
    return "Welcome";
}

var w = welcome();
console.log(w);
console.log(welcome());


function talk(_message) {
    console.log(_message);
}

talk("Bonjour !");
talk("Bonjour 2 !");


const hi = function() {
    console.log("Hi !");
}

hi();
hi();


const bye = () => {
    console.log('Bye !');
}

bye();
bye();