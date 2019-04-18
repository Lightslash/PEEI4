# PEEI4
Polygônes Expert EPSI I4

Pol - Steven - Sebastien

Il existe deux moteurs : 
- moteur_js.js
- moteur_json.js

Le moteur JS va utiliser des fichiers JS et stocker dans le localStorage du navigateur.
<script src="moteur_js.js"></script>
<script src="regles.js"></script>
<script src="fait.js"></script>

Le moteur JSON va utiliser des fichiers JSON, il faut configurer l'URL cible dans le fichier du moteur JSON, et placer le dossier polygone à la cible.
<script src="moteur_json.js"></script>

!!! Ne pas importer les deux moteurs en même temps, changer le moteur utilisé dans le fichie index.html !!!

Dans la console est affiché si la recherche vient de la base de faits ou de règles.