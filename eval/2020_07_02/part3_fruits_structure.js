/*
Résultat attendu
*/



class Fruit
{
    /** @var string label */
    #label;

    /** @var Number price */
    #price;

    getLabel() 
    {

    }

    getPrice()
    {

    }

    setPrice(price)
    {

    }
}



class Pear extends Fruit
{
    /** @var string color */
    #color;

    getColor()
    {

    }

    setColor(color)
    {

    }
}



class Apple extends Fruit 
{
    /** @var bool redLabel */
    #redlabel;

    isRedLabel()
    {

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

    }

    getClientId()
    {

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

    }

    getTotalPrice()
    {
        
    }
}