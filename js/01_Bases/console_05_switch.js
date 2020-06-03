// Javascript Switch
// Alternative à la structure if/else qui peut-être utilisée lorsqu'on souhaite simplement évaluer la valeur d'une variable

var valeur = 42;


// exemple simple: 
var condition = (valeur === 42);

switch(condition) { // switch prend 1 argument : la valeur à évaluer. Attention, ne pas mettre d'expression ici, uniquement une variable.
    case true: // si la variable 'condition' vaut true
        console.log("Bonne réponse");
        break; // breaks met fin au switch ( pour éviter que le reste du switch soit exécuté).
    default: // sinon (cas par défaut)
        console.error("Mauvaise réponse");
}

// est un équivalent de :

if(condition) { // si "valeur" vaut 42, le code se trouvant dans le bloc suivant est exécuté
    console.log("Bonne réponse");
}
else { // sinon (cas par défaut), le bloc de code suivant est exécuté
    console.error("Mauvaise réponse");
}


// on peut évaluer directement la valeur de nombres, chaines de caractères etc...

var chaine = "CRM";

switch(chaine) { 
    case "IUT": // si la variable 'chaine' vaut "IUT"
        console.log("Université");
        break; 
    case "CRM": // si la variable 'chaine' vaut "CRM"
        console.log("CRP Mulhouse");
        break; 
    default: // cas par défaut
        console.error("école primaire");
}

// equivalent avec IF : 
if(chaine === "IUT") {
    console.log("Université");
}
else if(chaine === "CRM") {
    console.log("CRP Mulhouse");
}
else {
    console.error("école primaire");
}





// plusieurs cas peuvent correspondre au même code à exécuter
// ci dessous, les 2 cas "CRM" et "ARFP" affichent "CRP Mulhouse"

var chaine = "CRM";

switch(chaine) { 
    case "IUT": // si la variable 'chaine' vaut "IUT"
        console.log("Université");
        break; 
    case "CRM": // si la variable 'chaine' vaut "CRM"
    case "ARFP": //  ou si la variable 'chaine' vaut "ARFP"
        console.log("CRP Mulhouse");
        break; 
    default: // cas par défaut
        console.error("école primaire");
}

// equivalent avec IF : 
if(chaine === "IUT") {
    console.log("Université");
}
else if(chaine === "CRM" || chaine === "ARFP") {
    console.log("CRP Mulhouse");
}
else {
    console.error("école primaire");
}