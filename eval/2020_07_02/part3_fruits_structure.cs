/*
Résultat attendu
*/
class Fruit
{
    private string label;

    private float price;

    public string GetLabel() // With C#, all methods use PascalCase
    {

    }

    public float GetPrice()
    {

    }

    public void SetPrice(float price)
    {

    }
}


class Pear : Fruit
{
    private string color;

    public string GetColor()
    {

    }

    public void SetColor(string color)
    {

    }
}

class Apple : Fruit 
{
    private bool redlabel;

    public bool IsRedLabel()
    {

    }
}

class Customer
{
    private int clientId;

    private Fruit sample;

    public Customer(int clientId)
    {

    }

    public int GetClientId()
    {

    }
}

class Basket
{
    private int @ref; // ref = C# reserved keyword. "@" prefix allows to use a keyword as class attribute name

    private Fruit[] items;

    public Basket(int _ref, Fruit fruit)
    {

    }

    public float GetTotalPrice()
    {
        
    }

}