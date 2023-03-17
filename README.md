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
            "city" => "La Rochelle", // Ville de la fiche
        }
    }
}
```

## :metal: Contributors

Thank you to all the people who have already contributed to Eskalad !

For future contributors, please read our [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md)
