const Point = require('./Point.js');
const Area = require('./Area.js');

/* Implémenter le programme suivant :
 *      a) Créer 2 "Area"
 *          a.1) Area 1 : 4 lignes x 4 colonnes
 *          a.2) Area 2 : 8 lignes x 6 colonnes
 *      b) Dans la 1ère "Area", ajouter 8 "Point" (coordonnées au choix, 5 dans les limites de la zone et 3 hors limites)
 *      c) Dans la 2nde "Area", ajouter 6 "Point" (coordonnées au choix, tous en dehors des limites)
 *      d) Créer ensuite 2 "Point" distincts ayant les mêmes coordonnées
 *      e) Les ajouter dans chacune des zones (1 "Point" par zone)
 *      f) Pour chaque zone : 
 *          - Afficher tous les points qui se trouvent hors des limites de la zone
 *          - Exécuter la méthode "needAllInside"
 *          - Afficher tous les points
 *          - Afficher le nombre d'emplacements libres
 */

// 1ere zone
const a1 = new Area(4, 4); 
// 2eme zone
const a2 = new Area(8, 6); 

// Ajout des 8 points dans la zone 1
[
    new Point(1,2),
    new Point(3,3),
    new Point(2,1),
    new Point(2,3),
    new Point(0,2),
    new Point(8,7),
    new Point(19,42),
    new Point(0,8),
].forEach(p => a1.addPoint(p));

// ajout des 6 points dans la zone 2
[
    new Point(19,2),
    new Point(45,3),
    new Point(17,1),
    new Point(11,3),
    new Point(15,2),
    new Point(1337,7),
].forEach(p => a2.addPoint(p));


// création des 2 points aux mêmes coordonnées
let p1 = new Point(9,9);
let p2 = p1.duplicate();

// ajout des 2 points dans leur zone respective
a1.addPoint(p1);
a2.addPoint(p2);

// let triDistance = a1.points.sort(a1.closestFromOrigin);

let a = 1;
let b = NaN;
let c = 0;
let d;
let e = null;

console.log(isFinite(a)); // true
console.log(isFinite(b)); // false
console.log(isFinite(c)); // true
console.log(isFinite(d)); // false
console.log(isFinite(e)); // true ??????????????????????

a1.needAllInside();

console.log();