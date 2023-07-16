# Note

## ISSUES MVP

- [x] avoir un script qui parcours les gpx et les points de passages et les rapproches
- [x] afficher une pages qui affiche les points de passage
- [x] quand on clique sur un points de passage affiches les routes qui passent par c'elle ci
- [ ] choisir une charte graphique
  - <https://coolors.co/00a676-f7f9f9-e0d0c1-a76d60-601700>


## IDEE

A partir de point de départ définis pouvoir afficher des Itineraires qui mene à mon lieu de travail.

Par exemple je clique sur le point d'interet dugesclin et cela affiche les itineraire qui passe a 150m je peux alors télécharger le trajet et voir le nom de la personne qui pro

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

### Sérendipidité

<https://stackoverflow.com/questions/68199332/how-to-generate-markers-using-an-api-in-vue-2-leaflet>

<https://www.openstreetmap.org/node/2612043833#map=17/46.33658/-0.46365>

<https://github.com/mpetazzoni/leaflet-gpx>

<https://github.com/SamR1/FitTrackee>

<https://github.com/SamR1/FitTrackee/blob/3844e4e5a2dc00c145ea66324a891c4b74b2f149/fittrackee_client/src/components/Workout/WorkoutDetail/WorkoutMap/index.vue#L5>

https://github.com/pointhi/leaflet-color-markers

<https://vue2-leaflet.netlify.app/components/LMarker.html#demo>
