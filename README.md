# commentJePeuxVenirEnVelo

commentJePeuxVenirEnVelo est une application web qui permet de partager les trajets pour en faire un site statique en vueJs.
Vous pouvez à partir d'un point représenté sur la carte voir les trajet qui passe par ce point.
Vous pouvez donc en définissant des points de passage et en collectant les trajets de vos camarades (en gpx), construire une site qui permet de les partager.

## installation

récuperer le dépot

```bash
git clone git@github.com:upCleat/commentJePeuxVenirEnV-lo.git
```

```bash
npm install
```

## configuration

vous aller devoir collecter des points gps à partir d'une carte vous pouvez utiliser [openstreetmap](https://www.openstreetmap.org/node/2612043833#map=15/46.3294/-0.4576) et la fonction "bouton droit **/** centrer sur la carte"

Pour d'une part collecter les points de passages à ajouter dans le fichier [public/passagepoint.json](public/passagepoint.json) et configurer le centrage de la carte dans [public/config.json](public/config.json)

Ajouter vos gpx dans le repertoire [public/gpx](public/gpx)

## tester

```bash
npm run dev
```
