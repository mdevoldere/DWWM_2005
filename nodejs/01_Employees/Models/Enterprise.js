/* Chargement du module "filesystem" de NodeJS. Ce module permet de manipuler le système de fichiers local  */
const fs = require('fs'); // import du module FileSystem

/* Chargement du module "path" de NodeJS. Ce module permet de manipuler les chemins locaux  */
const path = require('path');

/* Chargement de la classe "Employee" */
const Employee = require('./Employee.js');

/**
 * @class Employee
 * Gestion d'employés avec persistance des données au format JSON
 * Pour simplfier la lecture, certains contrôles sont volontairement omis.
 */
class Enterprise 
{
    /**
     * Initialize une Enterprise.
     * Le paramètre "_name" fait référence au nom du fichier contenant les employés au format JSON
     * @param string _name Le nom du fichier de sauvegarde 
     */
    constructor(_name) {

        /** @var string name Le nom du fichier de sauvegarde */
        this.name = _name || "CRM";

        /** @var string filename Chemin vers le fichier de sauvegarde. Le chemin mène vers le répertoire 'data'. 
         * path.resolve(): concatène les 2 parties du chemin fournis en paramètres (recommandé). 
         *  __dirname = chemin absolu vers le script actuel. 
         * "../data/" + _name + ".json" = chemin relatif par rapport au fichier actuel
        */
        this.filename = path.resolve(__dirname, "../data/" + _name + ".json");

        /** @var Employee[] employees La collection d'employés */
        this.employees = [];

        /**
         * Utilisation du module "filesystem"
         * La méthode "existsSync(chemin_vers_le_fichier)" vérifie l'existance d'un fichier. Renvoie un booléen (true= fichier existe | false = fichier inexistant)
         * On vérifie ici l'existance du fichier référencé dans "this.filename"
         */
        if (fs.existsSync(this.filename)) { // si le fichier existe

            // console.log('fichier existe');

            let raw = fs.readFileSync(this.filename); // lecture des données du fichier

            let json = JSON.parse(raw); // conversion du JSON en objet Javascript
            // console.log(json);

            /** 
             * La collection d'employés était stockée dans le fichier au format JSON 
             * La conversion ci-dessus convertit chaque objet JSON trouvé en objet Javascript générique (objet litéral).
             * Il est donc nécessaire de convertir chaque élément vers le type "Employee" (seul accepté dans notre collection d'employés).
             * C'est l'objectif du "for" ci-dessous.
             */

            let i;
            for (i = 0; i < json.length; i++) { // Parcours de la collection d'employées ainsi récupérée
                let emp = new Employee(json[i]); // Injection de chaque élément dans un nouvel objet "Employee" (voir: constructeur de la classe "Employee")
                this.create(emp); // Ajout de l'instance créée dans la collection de l'objet actuel
            }

            // console.log(this.employees);

            // Le code suivant est équivalent au "for" précédent (approche fonctionnelle)
            /*
            json.forEach(emp => {
                this.create(new Employee(emp));
            });
            */
        }
        else { // si le fichier n'existe pas
            console.log(this.filename);
            console.log('fichier inexistant');
            fs.writeFileSync(this.filename, "[]"); // création du fichier. Le second paramètre est un tableau vide au format JSON.
        }
    }

    /**
     * Sauvegarde de la collection d'employés dans le fichier JSON
     * JSON.stringi
     */
    save() {
        let json = JSON.stringify(this.employees); // conversion de la collection d'employés vers le format JSON
        fs.writeFileSync(this.filename, json); // écriture des données JSON dans le fichier de sauvegarde
    }

    /**
     * Valide un objet Employee
     * @param Employee _employee
     * @returns Boolean true: L'objet est de type Employee et les données sont valides | false : l'objet n'est pas un Employee valide
     * @todo Ajouter les contrôles des données de l'objet
     */
    isValid(_employee) {

        if (!(_employee instanceof Employee)) { // Si "_employee" n'est pas une instacne de la classe "Employee"        
            return false; // Pas valide
        }

        /** @todo Ajouter ici les contrôles de données de l'objet _employee */


        return true; // Valide
    }



    /**
     * Créer un employé (valide les données de l'employé et l'ajoute à la collection)
     * @param Employee _employee 
     * @returns Employee L'objet Employee ajouté (avec son nouvel identifiant)
     * @todo Gestion automatique des identifiants
     */
    create(_employee) {

        // si l'objet est valide et que l'identifiant n'existe pas parmi les employés existants
        if (this.isValid(_employee) && this.employees.find(e => e.id === _employee.id) === undefined) {

            /** @todo Ajouter ici création automatique d'un nouvel identifiant */

            this.employees.push(_employee); // ajout dans la collection
        }

        return _employee;
    }

    /**
     * Récupère une liste d'employés selon un ou plusieurs filtres
     * @param  _filter le(s) filtre(s) à appliquer sous forme d'expression lambda (ex: item => item.id === 2)
     * @returns Employee[] La liste des employés trouvés ou une liste vide si aucune correspodance
     */
    readAll(_filter) {

        return this.employees.filter(_filter);
    }

    /**
     * Recherche un employé par son identifiant
     * @param int _id 
     * @returns Employee l'employé correspondant ou undefined si non trouvé
     */
    read(_id) {

        let emp = this.employees.find(emp => emp.id === parseInt(_id));

        if (emp !== undefined) { // employé trouvé
            // retourne un "clone" de l'employé
            let copie = Object.assign(new Employee(), emp);
            return copie;
        }

        return undefined; // employé non trouvé
    }

    /**
     * Valide les données et met à jour un employé de la collection
     * @param Employee _employee Une copie d'un employé existant (correspondance par les identifiants)
     * @returns L'employé modifié ou undefined si la mise à jour a échoué
     */
    update(_employee) {

        if (!this.isValid(_employee)) {
            return _employee;
        }

        // si l'identifiant est inférieur à 1 ou égal à "NaN" 
        if (_employee.id < 1 && _employee.id !== NaN) {
            return _employee;
        }

        let exists = this.employees.find(e => e.id === _employee.id); // récupération de l'employé dans la collection (le vrai, pas une copie !!!)

        if (exists !== undefined) { // si l'employé correspondant a été trouvé
            // copie des données de "_employee" vers "exists"
            exists.copy(_employee);
            return exists;
        }

        return exists;
    }

    /**
     * Supprime de la collection un employé identifié par "_id"
     * @param int _id 
     * @returns bool true en cas de succès sinon, false
     */
    delete(_id) {

        let toDelete = this.employees.findIndex(emp => emp.id === _id); // Recherche de la position de l'employé avec l'identifiant "_id"

        if (toDelete > -1) { // Si un employé correspondant a été trouvé
            this.employees.splice(toDelete, 1);
            return true;
        }

        return false;
    }


    /**
     * Recherche l'employé ayant le salaire le plus élevé
     * @returns Employee
     */
    getHighestSalary() {

        return this.employees.sort((a, b) => b.salary - a.salary)[0];
    }

    /**
     * Recherche l'employé ayant le salaire le plus bas
     * @returns Employee
     */
    getLowestSalary() {

        return this.employees.sort((a, b) => a.salary - b.salary)[0];
    }

    /**
     * Retrouve la différence entre le salaire le plus elevé et le salaire le plus bas
     * @returns int
     */
    getSalaryGap() {

        return this.getHighestSalary().salary - this.getLowestSalary().salary;
    }


}


module.exports = Enterprise;
