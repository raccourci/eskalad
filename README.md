![Eskalad](logo.png)

![PullRequest Welcome](https://img.shields.io/badge/PR-welcome-brightgreen.svg?style=flat-square)
[![Twitter Follow](https://img.shields.io/twitter/follow/raccourciagency.svg?label=Twitter&style=social)](https://twitter.com/raccourciagency)

---

## :fire: Datalayer "Globals"

Sur chaque page d'un site Woody, un événements nommé "globals" défini un contexte global à la page. Cet événement étant le 1er envoyé dans le DataLayer, les données envoyées seront ensuite accessibles dans tous les événements suivants. Voici les données pouvant être envoyées dans "globals"

```javascript
{
    "event": "globals",
    "data": {
        "lang" => "fr", // Valeurs possibles : fr, en, de, it, es, nl ...
        "season" => null, // Valeurs possibles : hiver, ete ...
        "area" => null // Valeurs possibles : main, groupes, pros ...
    }
}
```

## :metal: Contributors

Thank you to all the people who have already contributed to Eskalad !

For future contributors, please read our [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md)
