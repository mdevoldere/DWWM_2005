abstract class Person
{
    private string lastname;

    private string firstname;

    Person(string _lastname, string _firstname)
    {
        this.lastname = _lastname;
        this.firstname = _firstname;
    }

    public string getLastname()
    {
        return this.lastname;
    }

    /**
    *
    */
    abstract public string getInfos();
    abstract public void test();


}

class Employee : Person
{
    Employee() : base("nom", "prenom")
    {

    }

    public string getInfos() { 
        return ""; 
        }

    public void test() { 

    }



}

class Enterprise
{
    private Person[] employees;
}

class Program
{
    public static main(string[] args)
    {
        Person p = new Person(); // ici ça plante !
        Employee e = new Employee();
    }
}
