![Eskalad](logo.png)

![PullRequest Welcome](https://img.shields.io/badge/PR-welcome-brightgreen.svg?style=flat-square)
[![Twitter Follow](https://img.shields.io/twitter/follow/raccourciagency.svg?label=Twitter&style=social)](https://twitter.com/raccourciagency)

---

## :fire: Datalayer "Globals"

Sur chaque page d'un site Woody, un événements nommé "globals" défini un contexte global à la page. Cet événement étant le 1er envoyé dans le DataLayer, les données envoyées seront ensuite accessibles dans tous les événements suivants. Voici les données pouvant être envoyées dans "globals".

```javascript
{
    "event": "globals",
    "data": {
        "lang" => "fr", // Valeurs possibles : fr, en, de, it, es, nl ...
        "season" => null, // Valeurs possibles : hiver, ete ...
        "area" => null, // Valeurs possibles : main, groupes, pros ...
        "page" => {
            "id_page" => 1234, // Correspond à l"ID du post WP
            "name" => "Mon titre de page",
            "page_type" => "front_page", // Valeurs possibles : front_page, basic_page, playlist_tourism ...
            "tags" => { // Correspond à des tags mis sur le post WP
                "places" => ["Ma ville", "Mon lieu dit"],
                "seasons" => ["Hiver"],
                "themes" => ["Famille", "Culture"],
            }
        },
        "playlist" => {
            "id_playlist" => null, // Identifiant de la playlist Hawwwai (null actuellement)
            "id_playlist_conf" => 6789, // Identifiant de la conf Hawwwai
            "pagination" => 1 // Correspond à la page de la playlist
        },
         "sheet" => {
            "id_sheet" => 2008022, // Identifiant Hawwwai de la fiche
            "id_sit" => "PREFIX-RESWS0560001260", // Identifiant SIT source de la fiche (Apidae, Tourinsoft ...)
            "id_reservation" => 1, // Identifiant de réservation (Regiondo, Elloha, OpenSystem, MSEM ...)
            "name" => "Restaurant \"La Terrasse\" - La Rochelle", // Nom de la fiche
            "bordereau" => "Restauration", // Bordereau de la fiche (Restauration, Hôtellerie ...)
            "type" => "RES", // Bordereau de la fiche (RES, HOT, HLO, HPA, VIL, DEG, PCU, PNA ...)
            "city" => "La Rochelle" // Ville de la fiche
        }
    }
}
```

## :fire: Evénements

Par défaut, des zones de clics sont déja analysées par un plan de marquage générique à tous les sites Woody.
A chaque zone de clic, nous envoyons à GTM un lot de donnée en fonction avec un pré-formatage pour chaque outil de mesure (GA3, GA4, Matomo, ATInternet). Si l'outil d'analyse n'est pas présent sur le site, la donnée formatée n'est pas envoyée.

Voici à quoi ressemble un événement envoyé à GTM depuis un site Woody :

```javascript
{
    "event": "woody_click_xxxxxx",
    "ga": {
        "enable": true,
        "category": "{Catégorie}", // Exemple: FR|PAGE|Mon titre de page|1234
        "action": "{Nom}", // Exemple : Partager réseaux sociaux
        "label": "{Valeur}", // Exemple : twitter
        "non_interaction": false
    },
    "ga4": {
        "enable": true,
        "name": "{Nom}",
        "label": "{Valeur}",
    },
    "matomo": {
        "enable": true,
        "category": "{Catégorie}",
        "action": "{Nom}",
        "name": "{Valeur}",
    },
    "at": {
        "enable": true,
        "name": "{Nom} - {Valeur}",
        "type": "action", // Valeurs possibles : action, download, exit
        "chapter1": "Chapitre 1",
        "chapter2": "Chapitre 2",
        "chapter3": "Chapitre 3",
    }
}
```

#### :speech_balloon: Liste des évenements

event | Nom | Valeur
-------------------------- | --- | ------
woody_click_social_network | Partager réseaux sociaux | twitter, facebook, pinterest, linkedin, whatsapp, mail
woody_click_add_favorites | Ajout aux favoris |
woody_click_submit_form | Soumission du formulaire Nurtik | ```Identifiant du formulaire Nurtik```
woody_click_submenu_link_desktop | Menu principal (desktop) | ```Texte du bouton + URL du lien```
woody_click_submenu_link_mobile | Menu principal (mobile) | ```Texte du bouton + URL du lien```

#### :warning: "Catégorie" n'est plus utilisée sur GA4 mais encore sur Matomo ou GA3

Type | Catégorie
---- | ---------
Page du site | ```Langue&#x7c;PAGE&#x7c;Titre de la page&#x7c;Identifiant Page```
Playlist Tourisme | ```Langue&#x7c;PLAYLIST&#x7c;Nom de la playlist&#x7c;Identifiant de la playlist```
Fiche Tourisme | ```Langue&#x7c;FICHE&#x7c;Bordereau&#x7c;Nom&#x7c;Identifiant Fiche&#x7c;Identifiant SIT```

## :metal: Contributors

Thank you to all the people who have already contributed to Eskalad !

For future contributors, please read our [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md)
