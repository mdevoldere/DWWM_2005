/**
 * @class Employee
 */

class Employee 
{

    /**
     * Initialize un employé
     * @param Object _employee Un objet quelconque.
     */
    constructor(_employee) {

        this.id = 0;
        this.lastname = "Doe";
        this.firstname = "John";
        this.role = "Unknown";
        this.salary = 0;
        this.hiredate = new Date();
        this.email = null;

        if(_employee !== undefined) { // si un objet est fourni en argument
            this.copy(_employee);
        }
    }

    /**
     * Analyse et copie les informations de l'objet fourni en argument
     * Seuls les valeurs des attributs nécessaires à l'objet actuel sont copiés.
     * @param Object _employee un objet quelconque à analyser et à copier
     */
    copy(_employee) {

        // si l'argument _employee n'est pas fourni, _employee = un objet litéral vide
        _employee = _employee || {};

        this.id         = parseInt(_employee.id || 0); 
        this.lastname   = _employee.lastname || "Doe";
        this.firstname  = _employee.firstname || "John";
        this.role       = _employee.role || "Unknown";
        this.salary     = parseInt(_employee.salary || 0);

        // Calcul de l'email
        this.email      = (this.firstname[0] + this.lastname).toLowerCase() + "@email.fr";

        // Recréation de l'objet Date à partir de la date fournie
        if(_employee.hiredate !== undefined) {
            this.hiredate = new Date(_employee.hiredate);
        }
    }

    /**
     * Retourne le salaire mensuel de l'employé
     * @returns int Le salaire mensuel de l'employé
     */
    getMonthlySalary() {
        //(salaire_mensuel = salaire_annuel / 12*0.75)
        return Math.round(this.salary / 12 * 0.75);
    }
   
    /**
     * Retourne l'ancienneté de l'employé (Différence entre la date actuelle et la date d'embauche)
     * @returns string L'ancienneté de l'employé au format : "Y années M mois J jours"
     */
    getSeniority() {

        let now = new Date(); 
        let y = now.getFullYear() - this.hiredate.getFullYear(); // années
        let m = now.getMonth() - this.hiredate.getMonth(); // mois
        let d = now.getDate() - this.hiredate.getDate(); // jours
        let result = "";

        if(m < 0) { // si le mois n'est pas encore passé
            y--; // soustraction d'une année
            m += 12; // répercussion sur les mois
        }

        if(d < 0) { // idem pour le jour
            m--;
            d = Math.floor(d + (365.25/12)); 
        }

        if(y > 0) {
            result += y + " année(s) ";
        }

        if(m > 0) {
            result += m + " mois ";
        }

        if(d > 0) {
            result += d + " jour(s) ";
        }

        return result;
    }
}


module.exports = Employee;


/*
getSeniority_Masoud() {

        let now = new Date();
        //let embaucheDate = this.hiredate;
        
        let diff = now.getTime() - this.hiredate.getTime();
        diff = Math.floor(diff/(1000*60*60*24));
        let ans = Math.floor(diff / 365.25);

        diff  = diff - ans*365.25;
        let mois = Math.floor(diff/(365.25/12));

        diff = Math.round(diff - mois*(365.25/12));
        let jour = diff;

        if(jour > 0 && mois > 0 && ans > 0){
            return ans + " ans et " + mois + " mois et " + jour + " jours";
        }else if(jour > 0 && mois > 0 && ans == 0){
            return  mois + " mois et " + jour + " jours";
        } else if (jour > 0 && mois == 0 && ans == 0){
            return jour + " jours";
        }
        else {
            return "L'employé est un alien";
        }
    }

    getSeniority_Aurelien() {
        let now = new Date();
        let diff = now.getTime() - this.hiredate.getTime();
        let year = (1000*3600*24*365.25);
        let month = year/12;
        let day = year/365.25;
        let result = "";

        if(diff < 0) {
            return "L'employé vient du futur.";
        }
        else if(diff % day <= 1) {
            return "L'employé est un newbie.";
        }
        else {
            result += Math.floor(diff/year) + " ";
            diff %= year; // équivalent de "diff = diff % year;"
            result += Math.floor(diff/month) + " ";
            diff %= month;
            result += Math.floor(diff/day) + " ";
            return result;
        }

    }

*/
