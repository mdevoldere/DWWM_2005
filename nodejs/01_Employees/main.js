const Employee = require ('./Models/Employee.js');
const Enterprise = require('./Models/Enterprise');


const ets = new Enterprise('DEV2005');

let emp = ets.read(42); // récupère une copie de l'employé 42
emp.lastname = "Kinporte";
ets.update(emp);
ets.save();

console.log(ets.getHighestSalary());
console.log(ets.getLowestSalary());
console.log(ets.getSalaryGap());


let fake = new Employee();
/*
let emp1 = new Employee({
    id: 42,
    lastname: "Doe",
    firstname: "John",
    role: "???",
    salary: 10000,
    hiredate:"2011-04-08"
});

ets.create(emp1);

ets.save();*/
return;




























ets.create(employe1);
ets.create(new Employee(2, 'RAB', 'IT', 'CDA', 60000, new Date()));


let monFiltre = emp => emp.hiredate > new Date();

let r1 = ets.readAll(monFiltre);
let r2 = ets.readAll(emp => emp.hiredate < new Date());

console.log(r1);
console.log(r2);


let myEmployee = ets.read(2);
console.log(myEmployee);

myEmployee.firstname = "OT";

ets.update(myEmployee);


myEmployee2 = new Employee();

ets.update(myEmployee2);


console.log();