let str = "Je suis une fougère.";

let last = str.slice(-1); // last character
console.log(last);

last = str.charAt(str.length -1); // last character too
console.log(last);

let a = "a";
let b = "a";
let c = new String("a");

console.log(a == b);
console.log(a === b);
console.log(a == c);
console.log(a === c);
console.log(c == b);
console.log(c === b);