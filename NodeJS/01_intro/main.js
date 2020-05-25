const semver = require('semver');

console.clear();
console.log('Hello World !');

let version = '1.2.3';

let beta = '0.4.2-rc';

let testVersion = semver.parse(version);
console.log(testVersion);
testVersion.
console.log(testVersion);

let testBeta = semver.parse(beta);
//console.log(testBeta);

let a = semver.minVersion(">1.2.3");
//console.log(a);
