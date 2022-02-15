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
    - une div avec les détails entrés : OK.
  - le nom du produit : OK.
  - la description du produit OK.
  - le nom du vendeur OK.
  - un bouton acheter OK.

    OK.

# page signup

Page pour s'inscrire
On entre son nom d'utilisateur, son mail, son mdp, et on coche si oui (true) ou non (false) on veut s'inscrire à la newsletter.
On clique sur le bouton s'inscire pour submit le form.
Il y a un lien sous le bouton dans le cas où on a déjà un compte.

Créons 2 pages : signup / login
OK.

Verifions les liens.
OK.

Dans le header.
Quand tu cliques sur s'inscrire, tu tomnbes sur la page sigup.
Quand tu cliques sur se connectuer, tu tombes sur la page login.
OK.

# Dans la page signup.

# On veut mettre en place un formulaire.

OK : D'abord, les visuels (sans css).

OK : Créons visuellement les champs du formulaire :
OK : 1 titre
OK : 3 inputs

- nom d'utilisateur
- email
- mot de passe

OK : 1 checkbox et un text newsletter
OK : 1 button s'inscrire
OK : 1 link vers login page

OK : Créons visuellement les champs du form login :
OK : 1 titre
OK : 1 input mail
OK : 1 input mpd
OK : 1 button
OK : 1 link

Que faut-il faire avec ces 2 pages ?

Lorsque je m'inscris, il faut que je garde mes données user dans ma base de donnée.
J'oriente ensuite vers la page login.

Lorsque je me connecte, il faut que le mdp soit bien dans la base de donnée. ===> authentification.
Si oui, alors je donne un cookie (mon token).
Le bouton 'se connecter' se change en 'se déconnecter' et ce nouveau boutton a pour action de supprimer le cookie.

Commençons par créer une requete axios.post vers l'API.
Vu qu'on utilise la méthode post, il faut lui donner du body à process.
{
email: email,
password: password,
username: username,
newsletter: checked,
}
OK.

Gérons les fonctions pour écouter les modifications d'état des différents champs du form.
OK.

Je récupère bien les données de mon form.
OK.

PAS BESOIN DE USEEFFECT SUR CE FORM, PAS BESOIN D'ATTENDRE UN LOADING, ON NE CHARGE PAS DE DATA. ON ENVOIE !

Donc, quand j'envoie mes infos user, je reçois un token.
OK.

Occupons nous désormais de login.
Faisons fonctionner les différents champs de son form.
OK.

# MOMENT CSS

## Header

Commençons par le bandeau du header.

Trions les div.

header :

- div container
  - div logo
  - div filters
  - div navigation - div connexion - div poster une offre
    OK.

Mettre la loupe dans le champs de recherche.
NON.

Créer la barre de filters.
NON.

## home

### Hero

Trions les div.

hero_div :

- une img banner
- une div prêts à faire du tri ?
  - titre
  - button
- une img effet torn
  OK.

Plaçons les titles sur l'image.
Relative/absolute.
OK.

Plaçons l'effet torn sur l'image.
Relative/absolute.
bottom 0.
NON.

# home content

Trions les div.

- une div
  - div de cartes container
    - div user
      - avatar
      - nom user
    - picture
    - prix
    - taille
    - marque

OK.

# offer

trier les div

OK : main div :

- OK : img produit
- div details tech
  - le prix
  - div caractéristiques
  - titre produit
  - text descriptif
  - div user
    - avatar
    - username
  - button acheter

# OK: mise en place des limits et des skips sur le front

OK: je veux afficher par exemple 10 articles par page.
limit = 10
et mettre en place des buttons

- précédent
- suivant

OK : Les buttons doivent disparaître s'il n'est plus possible de les utiliser.

# Déposer une annonce

OK : Créons la page publish.

OK : Redirigeons les user qui n'ont pas de token (qui ne se sont pas authentifié) vers la page de login. Les autres ont accès à la page publish.

PROBLEME :
quand je me connecte, il faut que je puisse me déconnecter.
quand je m'inscris, je dois pouvoir me connecter immédiatement.
afficher un message d'erreur si user déjà un compte

# chercher l'erreur des tokens
