class Company
{
    /** @var Employee[] employees */
    #employees;

    constructor()
    {
        this.#employees = [];
    }

    getEmployees()
    {
        return this.#employees;
    }
}

module.exports = Company;