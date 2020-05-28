/**
 * JAVASCRIPT:  Exercices
 * 
 * Coordonnées dans un espace à 2 dimensions type "fenêtre"
 * 
 * 
 * CONSIGNES : 
 * 1) Lisez la description de la classe "Area"
 * 2) Implémentez le code nécessaire à son bon fonctionnement en suivant les indications dans sa descirption
 * 3) Implémentez ensuite le programme suivant :
 *      a) Créer 2 "Area"
 *      b) Dans la 1ère "Area", ajouter 8 "Point"" (coordonnées au choix, 5 dans les limites de la zone et 3 hors limites)
 *      c) Dans la 2nde "Area", ajouter 6 "Point"" (coordonnées au choix, 4 dans les limites de la zone et 2 hors limites)
 *      d) Créer 2 "Point" distincts ayant les mêmes coordonnées
 *      e) Les ajouter dans chacune des zones (1 "Point" par zone)
 *      f) Pour chaque zone : 
 *          - Afficher tous les points qui se trouvent hors des limites de la zone
 *          - Déplacer ensuite les points hors limite vers le point le plus proche se trouvant dans les limites de la zone :D
 *          - Afficher tous les points en les triant les 
 * 
 */


/**
 * La classe "Area" représente une zone à 2 dimensions type "fenêtre".
 * La zone est définie par une largeur et une hauteur (width, height)
 * La zone peut accueillir des instances de la classe "Point" (dans un tableau ou autre)
 * On peut donc ajouter et supprimer des "Point" se trouvant dans la zone.
 * Particularités :
 * - Le "Point" d'origine de la zone (0,0) est situé au coin supérieur gauche de la zone
 * - Le "Point" d'origine existe toujours (créé dans le constructeur) et ne peut être supprimé
 * - A partir du "Point" d'origine, la zone s'étend vers la droite pour les abscisses et vers le bas pour les ordonnées
 * - 1 seul "Point" autorisé par coordonnée
 * - Les "Point" ajoutés peuvent se situer en dehors des limites de la zone
 * - Les "Point" situés sur la limite de la zone sont considérés "dans les limites de la zone" 
 * Aidez-vous des images "02_Points_***" présentes dans ce dossier pour vous faire une réprésentation
 */
class Area
{
    /**
     * Constructeur: Initialise une nouvelle instance de la classe "Area"
     * La largeur et la hauteur définissent les limites de la zone. 
     * @param int _width largeur de la zone
     * @param int _height hauteur de la zone
     */
    constructor(_width, _height) {
        // A vous de jouer
    }

    /**
     * Ajoute un "Point" dans la zone
     * Le "Point" peut se trouver hors des limites de la zone
     * @param Point _point 
     * @returns Boolean true en cas de succès, false si l'ajout est impossible 
     */
    addPoint(_point) {
        if((typeof _point) !== 'Point') {
            return false;
        }

        // A vous de jouer

        return true;
    }

    /**
     * Vérifie la position de chaque "Point" enregistré
     * Chaque Point hors des limites est automatiquement déplacé vers une position "dans la zone"
     * Ce déplacement utilise les mêmes règles que l'ajout d'un "Point"
     */
    needAllInside() {

    }
}