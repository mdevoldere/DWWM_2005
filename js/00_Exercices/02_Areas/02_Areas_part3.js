/**
 * JAVASCRIPT:  Exercices
 * 
 * Types de "Point"
 * 
 * Un Point représente une position.
 * 
 * Nous avons besoin de représenter plusieurs types de Point :
 *  - Un mur (Wall) possédant
 *      . un attribut supplémentaire avec accesseur et sans mutateur
 *          material : string
 *  - Une porte (Door) possédant
 *      . un attribut supplémentaire avec accesseur et sans mutateur
 *          isOpen : bool
 *      . une méthode supplémentaire
 *          openClose() : bool
 *  - Un chemin (Path) possédant
 *      . 2 attributs supplémentaires avec accesseur et mutateur
 *          player : bool
 *          nbPassages : int
 *  - Une arrivée (Goal) possédant
 *      . 1 attribut supplémentaire avec accesseur et sans mutateur
 *          success : bool
 * 
 * 
 * Travail à réaliser
 * 
 * Créer un nouveau projet.
 * Dans ce projet, créer un répertoire "models". La classe Point ci-dessous ainsi que les classes à implémenter sont à placer dans ce répertoire.
 * La classe Point est réécrite en respectant le principe d'encapsulation (attributs privés + accesseurs pour x et y)
 * En utilisant l'héritage, implémenter les classes "Wall", "Door", "Path" et "Goal" décrites ci-dessus.
 * Toutes ces classes héritent de Point (directement ou indirectement).
 */


 /**
  * La classe "Point" représente les coordonnées d'un point dans une zone à 2 dimensions
  */
 class Point 
 {

    /** @var int x Abscisse */
    #x;

    /** @var int y Ordonnée */
    #y;

     /**
      * Constructeur: Initialise une nouvelle instance de la classe "Point"
      * @param int _x Coordonnée horizontale du point (abscisse). Valeur négative acceptée
      * @param int _y Coordonnée verticale du point (ordonnée). Valeur négative acceptée
      */
     constructor(_x, _y) {
         this.setX(_x || 0);
         this.setY(_y || 0);
     }
 
     /**
      * Retourne une représentation textuelle du Point
      * @return string Les coordonnées du Point
      */
     toString() {
         return "(" + this.x + "," + this.y + ")";
     }

     /**
      * Retourne la valeur de X
      * @returns int Abscisse
      */
     getX() {
        return this.#x;
    }

    /**
      * Retourne la valeur de Y
     * @returns int Ordonnée
     */
    getY() {
        return this.#y;
    }

    /**
     * Définit une nouvell valeur pour X
     * @param int _newX nouvelle valeur pour X 
     */
    setX(_newX) {
        _newX = parseInt(_newX || 0);
        this.#x = isFinite(_newX) ? _newX : 0;
    }

    /**
     * Définit une nouvell valeur pour Y
     * @param int _newY nouvelle valeur pour Y
     */
    setY(_newY) {
        _newY = parseInt(_newY || 0);
        this.#y = isFinite(_newY) ? _newY : 0;
    }

    /**
     * Repositionne le Point vers de nouvelles coordonnées
     * @param int _x Nouvelle valeur pour X
     * @param int _y Nouvelle valeur pour Y
     */
    move(_x, _y) {
        this.setX(_x || 0);
        this.setY(_y || 0);
    }
 
     /**
      * Duplique le Point actuel dans une nouvelle instance
      * @returns Point La nouvelle instance de Point créée
      */
     duplicate() {
        return new Point(this.#x, this.#y);
    }

    /**
      * copie les coordonnées du "Point" fourni en argument dans l'instance actuelle
      * @param Point _point le point à copier
      */
     copy(_point) {
        this.#x = _point.#x;
        this.#y = _point.#y;
    }

    /**
      * Les coordonnées de l'instance actuelle et du "Point" fourni en argument sont échangées
      * @param Point _point Le point à échanger
      */
     rabbit(_point) {
        let p = this.duplicate();
        this.copy(_point);
        _point.copy(p);
    }

    /**
     * Retourne la distance par rapport au point d'origine (0,0)
     * @returns int distance par rapport à la coordonnée (0,0)
     */
    distanceFromOrigin() {
        return (Math.abs(this.#x) + Math.abs(this.#y));
    }
 
 }

 module.exports = Point;