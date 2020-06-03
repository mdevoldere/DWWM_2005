/*
    A tour de rôle, l'ordinateur et le joueur choisissent un nombre qui ne peut prendre que 3 valeurs: 0, 1 ou 2.
    Le choix du nombre par l'ordinateur sera simulé par génération d'un nombre aléatoire : N <-- RANDOM
    Si la différence entre les nombres choisi vaut :
    ▪ 2 : le joueur qui a proposé le plus grand nombre gagne un point.
    ▪ 1 : le joueur qui a proposé le plus petit nombre gagne un point.
    ▪ 0 : aucun point n'est marqué.
    Le jeu se termine quand un des deux joueurs (l'ordinateur ou le joueur humain) totalise 10 points ou quand l'être
    humain introduit un nombre négatif qui indique sa volonté d'arrêter de jouer. 
*/


/*
    FONCTIONS
        // rien
    VARIABLES

    choix_joueur EST UN ENTIER
    choix_ia EST UN ENTIER
    score_joueur EST UN ENTIER
    score_ia EST UN ENTIER

    DEBUT

        TANT QUE (score_ia EST INFERIEUR A 10) ET (score_joueur EST INFERIEUR A 10) ET (choix_joueur EST SUPERIEUR OU EGAL A 0)
        FAIRE

            choix_ia <-- RANDOM
            
            ÉCRIRE "Choisissez un chiffre entre 0, 1 et 2"

            LIRE choix_joueur
        
            SI choix_joueur EST INFERIEUR A 0 ALORS
                ECRIRE "Le joueur a souhaité arrêter !"
            SINON 
                SI choix_ia - choix_joueur EST EGAL A 2 ALORS
                    score_ia += 1
                SINON SI choix_joueur - choix_ia EST EGAL A 2 ALORS
                    score_joueur += 1
                SINON SI choix_ia - choix_joueur EST EGAL A 1 ALORS
                    score_joueur += 1
                SINON SI choix_joueur - choix_ia EST EGAL A 1 ALORS
                    score_ia += 1
                SINON ALORS 
                    ÉCRIRE "Aucun point attribué !"
                FIN SI
            FIN SI

        FIN TANT QUE
    

        ÉCRIRE "Le score de l'ia est: ", score_ia
        ÉCRIRE "Le score du joueur est:", score_joueur


        SI score_ia EST SUPÉRIEUR A score_joueur ALORS
            ÉCRIRE "L'ia à gagné"
        SINON
            ÉCRIRE "Le joueur à gagné"
        FIN SI

    FIN
*/


/**
 * Implémentation simple en JS
 */

let choix_joueur; // undefined
let choix_ia = 0;
let score_joueur = 0;
let score_ia = 0;

do
{
    choix_ia = Math.round(Math.random() * 2); 

    choix_joueur = parseInt("SAISIE UTILISATEUR");

    if(choix_joueur < 0) {
        console.log("Le joueur souhaite arrêter");
    }
    else {
        if((choix_ia - choix_joueur) === 2 ) {
            score_ia += 1;
        }
        else if((choix_joueur - choix_ia) === 2) {
            score_joueur +=1;
        }
        else if((choix_ia - choix_joueur) === 1) {
            score_joueur += 1;
        }
        else if((choix_joueur - choix_ia) === 1) {
            score_ia +=1;
        }
        else {
            console.log("Aucun point attribué");
        }
    }

}
while(score_ia < 10 && score_joueur < 10 && choix_joueur >= 0);
