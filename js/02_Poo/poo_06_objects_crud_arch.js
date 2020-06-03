class Person {
    constructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
}

/**
 * Cette classe gère une collection de "Person"
 */
class People {
    constructor() {
        this.persons = []; // la collection de "Person"
    }

    /**
     * Calcul d'identifiant (identifiant max dans la collection + 1)
     */
    newId() {
        if (this.persons.length < 1) {
            return 1;
        }
        return Math.max(...this.persons.map(p => p.id)) + 1;
    }

    /**
     * Valide les données d'un objet _person)
     * si (mesReglesdeValidation) alors renvoie true sinon renvoie false
     */
    isValid(_person) {
        if (_person instanceof Person) { // ajouter ici les règles de validation d'un objet "Person"
            return true;
        }

        return false;
    }

    /**
     * Ajoute une Person dans la collection
     * @param Person _person 
     * @returns Person
     */
    create(_person) {
        if (this.isValid(_person)) {
            _person.id = this.newId();
            this.persons.push(_person);
        }

        return _person;
    }

    /**
     * Recherche une personne par son identifiant
     * @param int _id
     * @returns Person La personne trouvée ou undefined si aucune correspondance 
     */
    read(_id) {
        _id = parseInt(_id);
        return this.persons.find(person => person.id === _id);
    }

    /**
     * Mets à jour une Person dans la collection
     * @param Person _person 
     * @returns Person
     */
    update(_person) {
        if (this.isValid(_person) && this.read(_person.id) !== undefined) {
            // rien à faire pour le moment
            // plus tard, les modifications seront répercutées dans une base de données
        }

        return _person;
    }

    /**
     * Supprime une Person de la collection
     * @param int _id 
     */
    delete(_id) {
        _id = parseInt(_id);

        let position = this.persons.findIndex(person => person.id === _id);

        if (position >= 0) {
            this.persons.splice(position, 1);
        }
    }
}

const p = new People();

p.create(new Person(71, 'Mike'));
p.create(new Person(42, 'Jean'));
p.create(new Person(7, 'Paul'));
p.create(new Person(433, 'Joe'));
p.create(new Person(89, 'Popo'));

console.log(p.persons);