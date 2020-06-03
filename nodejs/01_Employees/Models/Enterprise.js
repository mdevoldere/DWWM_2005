const Employee = require('./Employee.js');

/**
 * Gestion d'employés
 */
class Enterprise 
{
    constructor() {
        this.employees = [];
    }

    /**
     * Valide un objet Employee
     * @param Employee _employee
     */
    isValid(_employee) {

        //console.log(typeof _employee);
        if(!(_employee instanceof Employee)) {            
            return false;
        }

        return true;
    }

    

    /**
     * Créer un employé (valide les données de l'employé et l'ajoute à la collection)
     * @param Employee _employee 
     * @returns Employee L'objet Employee ajouté
     */
    create(_employee) {

        if(this.isValid(_employee)) {

            // TO DO:  gestion automatique des identifiants

            this.employees.push(_employee);
        }

        return _employee;
    }

    /**
     * Récupère une liste d'employés selon un ou plusieurs filtres
     * @param  _filter le(s) filtre(s) à appliquer
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

        if(emp !== undefined) {
            // retourner une copie de l'employé
            // cloner l'objet : let copie = Object.assign()
            // moteur de recherche : MDN JS object assign
            // moteur de recherche newbie: JS cloner objet
        }

        return undefined;

        /*let i;

        for(i = 0; i < this.employees.length; i++) {
            let emp = this.employees[i];

            if(emp.id === parseInt(_id)) {
                return emp;
            }
        }*/

        /*for(emp of this.employees) {
            if(emp.id === parseInt(_id)) {
                return emp;
            }
        }*/

    }

    /**
     * Valide les données et met à jour un employé de la collection
     * @param Employee _employee 
     */
    update(_employee) {

        if(!this.isValid(_employee)) {
            return _employee;
        }

        if(_employee.id < 1 && _employee.id !== NaN) {
            return _employee;
        }

        let exists = this.read(_employee.id);

        if(exists !== undefined && exists === _employee) {

        }

        return _employee;
    }
    
    /**
     * Supprime un employé identifié par "_id" de la collection
     * @param int _id 
     * @returns bool true en cas de succès sinon, false
     */
    delete(_id) {
        return true;
    }


    /**
     * Recherche l'employé ayant le salaire le plus élevé
     * @returns Employee
     */
    getHigherSalary() {
        return undefined;
    }

    /**
     * Recherche l'employé ayant le salaire le plus bas
     * @returns Employee
     */
    getLowerSalary() {
        return undefined;
    }

    /**
     * Retrouve la différence entre le salaire le plus elevé et le salaire le plus bas
     * @returns int
     */
    getSalaryGap() {
        return 0;
    }


    



}


module.exports = Enterprise;
