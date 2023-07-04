---
name: Histoires d'utilisateurs
about: Describe this issue template's purpose here.
title: 'HU '
labels: 'HU'
assignees: ''

---

## Histoires d'utilisateurs

Une user story est aussi bien implémentée que communiquée.
Si le contexte et les objectifs sont précisés, il sera plus facile pour chacun de le mettre en œuvre, de le tester, de s'y référer…

---

Liens rapides : [Résumé](#résumé) | [Description](#description) | [Modèle](#modèle) | [Exemple](#exemple) | [Ressources](#ressources)

---

### Résumé

Une user story doit généralement avoir un résumé structuré de la manière suivante :

1. **En tant que** [utilisateur concerné par l'histoire]
1. **Je veux** [but de l'histoire]
1. **pour que** [raison de l'histoire]

La partie « afin que » soit facultative si plus de détails sont fournis dans la description.

Cela peut alors devenir "En tant qu'utilisateur gérant mes propriétés, je veux des notifications lors de l'ajout ou de la suppression d'images".

Vous pouvez en savoir plus sur certaines raisons de cette structure dans cet [article bien présenté] [1].

### Description

Nous utilisons le modèle suivant pour créer des user stories.

Puisque nous avons mentionné le type d'utilisateur, la user story peut y faire référence avec "I".
Ceci est utile pour la **cohérence** et pour **éviter les répétitions** dans les critères d'acceptation.
C'est aussi bien de pratiquer un peu d'**empathie**.

Par exemple:

``` démarque
1. Je clique sur le bouton « soumettre ».
1. Une fenêtre modale apparaît si je n'ai pas assez de crédits.
1. La fenêtre modale contient les éléments suivants :
  1. […]
```

Le modèle utilise [markdown][2].
Vous devriez vous y familiariser si vous ne l'êtes pas déjà, **c'est génial !**

### Modèle

``` démarque
[
La user story doit avoir une raison d'être : de quoi ai-je besoin en tant qu'utilisateur décrit dans le résumé ?
Cette partie détaille tout détail qui n'a pas pu être transmis par le résumé.
]


### Critères d'acceptation

1. [Si je fais A.]
1. [B devrait arriver.]

[
Aussi, voici quelques points à régler :

1. Contrainte 1 ;
1. Contrainte 2 ;
1. Contrainte 3.
]


### Ressources:

* Maquettes : [Voici une URL ou le nom de la ou des maquettes dans inVision] ;
* URL de test : [Voici une URL vers la branche ou l'IP de test] ;
* URL de mise en scène : [Voici une URL vers la fonctionnalité de mise en scène] ;


### Remarques

[Quelques notes complémentaires si besoin :]

* > Voici une citation d'un e-mail
* Voici toutes les informations utiles qui peuvent exister…
```

### Exemple

``` démarque
**En tant que** membre de [l'équipe de développement](http://scrumguides.org/scrum-guide.html#team-dev),
**Je veux** un contexte et des objectifs clairs **afin que** je puisse travailler efficacement.

La diffusion d'informations dans des e-mails et d'autres endroits rend difficile le travail collaboratif,
j'ai donc besoin de toutes les informations pertinentes dans le cadre du problème concerné.


### Critères d'acceptation

1. J'ai des critères d'acceptation clairs [quelle belle récursivité].
1. Je dois comprendre la logique des maquettes, plus que les pixels utilisés, pour pouvoir optimiser le code.

Veuillez également noter :

1. Si une conversation sur le problème sur lequel je travaille a lieu,
les résultats doivent être documentés dans ce problème (et non dans les commentaires).


### Ressources:

* [Guides de style et modèle pour une user story](agile-user-story.md)
* ["Avantages du modèle de user story "En tant qu'utilisateur, je veux".](http://www.mountaingoatsoftware.com/blog/advantages-of-the-as-a-user-i-want-user -modèle d'histoire)
* [Guide Scrum](http://scrumguides.org/scrum-guide.html)
```


### Ressources:

* [Guides de style et modèle pour une user story](agile-user-story.md)
* ["Avantages du modèle de user story "En tant qu'utilisateur, je veux"."] [1]
* [Guide Scrum][4]


[1] : http://www.mountaingoatsoftware.com/blog/advantages-of-the-as-a-user-i-want-user-story-template
[2] : http://daringfireball.net/projects/markdown/basics
[3] : http://scrumguides.org/scrum-guide.html#team-dev
[4] : http://scrumguides.org/scrum-guide.html
