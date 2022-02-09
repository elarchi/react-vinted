j'ai ma structure principale : App.js
Avec 2 Routes : Home/Offer.
OK.

j'arrive à bien passer des props et des params entre les pages.
OK.

Dans HOME
je veux la liste des offres de l'API

Je fais une requête AXIOS
OK.

Mettre en place le système de isLoading.
OK.

je veux afficher toutes les offres sur la page Home.
OK.

je veux afficher :

- le nom de l'utilisateur qui a posté l'annonce
- l'img
- le prix
- la taille
- la marque
  OK.

Je map sur mon API et récupère des titres pour les afficher.
OK.

# Je veux que, lorsque je clique sur le nom d'un produit, j'accède à la page Offer, avec toutes les infos du produit.

Commençons petit, commençons par avoir l'id du produit dans la page Offer et dans son URL.
OK.

Ensuite essayons d'avoir le nom du produit et son id.
Il faut donc qu'on parle du même produit.
OK.

Faisons une requete axios dans offer.
ma requête me permet de chercher ma data sur API pour avoir accès aux données.
OK.

Je veux pouvoir avoir le même affichage que sur vinter-app du reacteur soit :

- l'image du produit : OK
- une div avec:
  - le prix :OK
  - une div de détails
    - une div des titres des détails : OK
      - marque
      - taille
      - état
      - couleur
      - emplacement
      - modes de paiement
    - une div avec les détails entrés
  - le nom du produit
  - la description du produit
  - le nom du vendeur
  - un bouton acheter
