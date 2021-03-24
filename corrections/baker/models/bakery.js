class Bakery {
    
    constructor (){

        this.running = false;

        this.level = 1;
        this.level_price = 100;

        this.mills = 1;
        this.mills_price = 80;

        this.golds = 100;

        this.flour = 50;

        this.baguettes = 0;
        this.totalGoldsEarned=0;
        this.totalGoldsSpent=0;
        this.totalFlourProduced=0;
        this.totalBaguettesProduced=0;
    }

    update()  {
        this.golds -= this.mills * this.level * 0.05;

        this.flour += this.mills;

        if(this.flour >= this.level + 1) {
            this.flour -= this.level +1
            this.baguettes += this.level;
        }
            
        return this.golds > 0;
    }

    levelUp() 
    {
        if(this.golds >= this.level_price) {
            this.level++
            this.golds -= this.level_price;
            this.level_price *= 1.5;
            return true;
        }

        return false;
    }

    buyMill() 
    {
        if(this.golds >= this.mills_price) {
            this.mills++
            this.golds -= this.mills_price;
            this.mills_price *= 1.5;
            return true;
        }

        return false;
    }



    

}
export { Bakery };