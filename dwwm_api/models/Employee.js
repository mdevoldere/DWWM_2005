class Employee
{
    /** @var string lastname */
    #lastname;

    /** @var string firstname */
    #firstname;

    constructor(_lastname, _firstname) {
       this.#lastname = _lastname;
       this.#firstname = _firstname;
    }

    getLastname()
    {
        return this.#lastname;
    }

    setLastname(_lastname)
    {
        if(_lastname.length > 1) {
            this.#lastname = _lastname;
        }
    }

    getInfo()
    {
        return "Employee : " + this.#firstname + " " + this.#lastname;
    }
}

module.exports = Employee;