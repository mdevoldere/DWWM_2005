class Salle
{

}


class Cinema 
{
    #salles;

    /*constructor(_salle, _salle2)
    {
        this.#salles = [];
        this.#salles.push(_salle);
        this.#salles.push(_salle2);
    }*/

    constructor(_salles)
    {
        if(_salles.length < 2) {
            throw new Error();
        }

        this.#salles = _salles;
    }

}

let salle = new Salle(250, 'A245');

let salle2 = new Salle(350, 'C456');

let salles = [salle, salle2];

// let cinema = new Cinema(salle, salle2);

let cinema = new Cinema(salles);


