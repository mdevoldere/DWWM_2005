const Employee = require("./Employee.js");

/**
 * Classe Manager
 * Le manager est un employé qui gère une équipe
 */
class Manager extends Employee
{

    #team;


    constructor(_employee) {

        super(_employee);

        this.#team = [];

    }

    /**
     * 
     */
    getTeam() {

    }

    /**
     * 
     * @param Employee[] _team 
     */
    setTeam(_team) {

    }

    /**
     * 
     * @param Employee _emp 
     */
    addEmployee(_emp) {

    }

    /**
     * 
     * @param string _email 
     */
    setEmail(_email) {
        super.setEmail(_email);

        if(this.getEmail() !== undefined) {
            
        }
    }

    

}

module.exports = Manager;