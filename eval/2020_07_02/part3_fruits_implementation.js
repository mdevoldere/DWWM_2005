/*
Exemple d'implémentation simplifiée en JS (sans contrôle sur les données)
*/



class Fruit
{
    /** @var string label */
    #label;

    /** @var Number price */
    #price;

    getLabel() 
    {
        return this.#label;
    }

    getPrice()
    {
        return this.#price;
    }

    setPrice(price)
    {
        this.#price = price;
    }
}



class Pear extends Fruit
{
    /** @var string color */
    #color;

    getColor()
    {
        return this.#color:
    }

    setColor(color)
    {
        this.#color = color;
    }
}



class Apple extends Fruit 
{
    /** @var bool redLabel */
    #redlabel;

    isRedLabel()
    {
        return this.#redlabel;
    }
}



class Customer
{
    /** @var Number clientId */
    #clientId;

    /** @var Fruit sample */
    #sample;

    constructor(clientId)
    {
        this.#clientId = clientId;
        this.#sample = null;
    }

    getClientId()
    {
        return this.#clientId;
    }
}



class Basket
{
    /** @var Number ref */
    #ref; 

    /** @var Fruit[] items */
    #items;

    constructor(ref, fruit)
    {
        this.#ref = ref;
        this.#items = [];
        this.#items.push(fruit) // Composition = at least 1 Fruit in basket
    }

    getTotalPrice()
    {
        let totalPrice;

        for(let fruit of this.#items) {
            totalPrice += fruit.getPrice();
        }

        return totalPrice;
    }
}