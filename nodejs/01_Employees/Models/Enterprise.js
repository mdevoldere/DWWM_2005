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
     * Récupère une liste d'employés selon un ou plusieurs filtres
     * @param  _filter le(s) filtre(s) à appliquer
     * @returns Employee[] La liste des employés trouvés ou une liste vide si aucune correspodance
     */
    readAll(_filter) {
        return [];
    }

    /**
     * Créer un employé (valide les données de l'employé et l'ajoute à la collection)
     * @param Employee _employee 
     * @returns Employee L'objet Employee ajouté
     */
    create(_employee) {
        return _employee;
    }

    /**
     * Recherche un employé par son identifiant
     * @param int _id 
     * @returns Employee l'employé correspodant ou undefined si non trouvé
     */
    read(_id) { 
        return undefined;
    }

    /**
     * Valide les données et met à jour un employé de la collection
     * @param Employee _employee 
     */
    update(_employee) {
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
