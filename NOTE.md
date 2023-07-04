# Note

## IDEE 

A partir de point de départ définis pouvoir afficher des Itineraires qui mene à mon lieu de travail.

Par exemple je clique sur le point d'interet dugesclin et cela affiche les itineraire qui passe a 1 km je peux alors télécharger le trajet et voir le nom de la personne qui pro

### Fonctionnement 

Avoir une liste de point de départ facilement identifier par position gps
Avoir plusieur fichier gpx passant non loin de ces points
Un traitement constitue une "base" liant les fichiers au points.

### MVP

#### batch 

a partir d'une liste de point de départ.
pour touts les gpx : 

- determiner si le gpx passe pres d'un point d'interet
exporter un objet json qui reference chaque point et le nom du gpx qui passe à proximité

#### page 

affiche tout les point de passage possible
si on clique sur un point on affiche tout les gpx qui vont bien.


