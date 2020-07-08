// Import des modules

const Employee   = require('./Models/Employee.js');
const Manager   = require('./Models/Manager.js');
const Director   = require('./Models/Director.js');
const Enterprise = require('./Models/Enterprise.js');


// Déclaration des variables, initialisation des objets

//const crm = new Enterprise('CRM');

let emp = new Employee();
let man = new Manager();
let dir = new Director();

emp.setEmail("email@new.com");
man.setEmail("manager@super.fr");



console.log((emp instanceof Employee)); // true
console.log((emp instanceof Manager)); // false
console.log((man instanceof Manager)); // true
console.log((man instanceof Employee)); // true
console.log("\n");
console.log((dir instanceof Director)); // true
console.log((dir instanceof Manager)); // true
console.log((dir instanceof Employee)); // true

console.log(typeof emp); // 
console.log(typeof man); // 
console.log(typeof dir); // 


console.log(typeof a);

// man = (Employee) man; // exception en cas d'erreur
// man = (Manager) man;



console.log();