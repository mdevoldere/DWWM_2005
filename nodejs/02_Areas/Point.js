 /**
  * La classe "Point" représente les coordonnées d'un point dans une zone à 2 dimensions
  */
 class Point 
 {
     /**
      * Constructeur: Initialise une nouvelle instance de la classe "Point"
      * @param int _x Coordonnée horizontale du point (abscisse). Valeur négative acceptée
      * @param int _y Coordonnée verticale du point (ordonnée). Valeur négative acceptée
      */
     constructor(_x, _y) {
         this.x = parseInt(_x || 0);
         this.y = parseInt(_y || 0);
     }
 
     /**
      * Retourne une représentation textuelle du Point
      * @return string Les coordonnées du Point
      */
     toString() {
         return "(" + this.x + "," + this.y + ")";
     }
 
     /**
      * Duplique le Point actuel dans une nouvelle instance
      * @returns Point La nouvelle instance de Point créée
      */
     duplicate() {
        return new Point(this.x, this.y);
    }

    /**
      * copie les coordonnées du "Point" fourni en argument dans l'instance actuelle
      */
     copy(_point) {
        this.x = _point.x;
        this.y = _point.y;
    }

    /**
      * Les coordonnées de l'instance actuelle et du "Point" fourni en argument sont échangées
      */
     rabbit(_point) {
        let p = this.duplicate();
        this.copy(_point);
        _point.copy(p);
    }

    /**
     * Retourne la distance par rapport au point d'origine (0,0)
     */
    distanceFromOrigin() {
        return this.x + this.y;
    }
 
 }

 module.exports = Point;