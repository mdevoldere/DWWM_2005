const Employee = require('./models/Employee.js');
const Company = require('./models/Company.js');

let emp = new Employee('Devoldere', 'Mike');

let nouVeauNom = 'Brown';

emp.setLastname(nouVeauNom);

console.log(emp.getLastname());

console.log(emp.getInfo());

console.log();

let ets = new Company();

let employees = ets.getEmployees();

employees.push(emp);

employees.push(new Employee('aa', 'bb'));

employees = [];

console.log(ets.getEmployees());