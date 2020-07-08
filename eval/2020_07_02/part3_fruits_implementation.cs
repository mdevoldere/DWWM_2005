/*
Exemple d'implémentation simplifiée en C#
*/
class Fruit
{
    private string label;

    private float price;

    public string getLabel()
    {
        return this.label;
    }

    public float getPrice()
    {
        return this.price;
    }

    public void setPrice(float price)
    {
        this.price = price;
    }
}


class Pear : Fruit
{
    private string color;

    public string GetColor() // With C#, all methods use PascalCase
    {
        return this.color;
    }

    public void SetColor(string color)
    {
        this.color = color;
    }
}

class Apple : Fruit 
{
    private bool redlabel;

    public bool IsRedLabel()
    {
        return this.redLabel;
    }
}

class Customer
{
    private int clientId;

    private Fruit sample;

    public Customer(int clientId)
    {
        this.clientId = clientId;
        this.sample = default(Fruit); // default() returns default value for given Type. Our Custom classes are <Nullable>, in this case, default(Fruit) == null.
    }

    public int GetClientId()
    {
        return this.clientId;
    }
}

class Basket
{
    private int @ref; // ref = C# reserved keyword. "@" prefix allows to use a keyword as variable or class attribute name

    private List<Fruit> items;

    public Basket(int _ref, Fruit fruit)
    {
        this.items = new List<Fruit>();
        this.items.Add(fruit); // Composition = at least 1 Fruit in basket
    }

    public float getTotalPrice()
    {
        float totalPrice = 0;

        foreach (Fruit fruit in this.items)
        {
            totalPrice += fruit.GetPrice();
        }

        return totalPrice;
    }

}