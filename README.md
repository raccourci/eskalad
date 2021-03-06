![Eskalad](logo.png)

![PullRequest Welcome](https://img.shields.io/badge/PR-welcome-brightgreen.svg?style=flat-square)
[![Twitter Follow](https://img.shields.io/twitter/follow/raccourciagency.svg?label=Twitter&style=social)](https://twitter.com/raccourciagency)

---

## :fire: Documentation

Toute la nomenclature des événements GTM envoyés par Hawwwai et Woody est détaillée dans ce document :

:ledger: [Google Sheet : Eskalad - GTM Events](https://docs.google.com/spreadsheets/d/1-MoWKIZ33HDxQhO8VjEm4PydfChZRBImAtM37vJOFt4/edit?usp=sharing)

---

Chaque événement respecte le format ci-dessous. Afin de simplifier le lien avec Google Analytics, nous préformatons les valeurs des 3 clés : "Catégorie, Action et Label".

```
{
    "event": "Nom de l'événement",
    "eventCategory": "Valeur de la Catégorie",
    "eventAction": "Valeur de l'Action",
    "eventLabel": "Valeur du Label",
    "eventNonInteraction": "true|false",
    "data": {
        "ga": {
            "category": "Valeur de la Catégorie",
            "action": "Valeur de l'Action",
            "label": "Valeur du Label"
        },
        "sheet": {
            "id_sheet": "Identifiant Fiche",
            "id_sit": "Identifiant SIT",
            "id_reservation": "Identifiant centrale de réservation (etablissement)",
            "id_reservation_product": "Identifiant centrale de réservation (offre)",
            "name": "Nom de la fiche",
            "type": "Libellé de bordereau",
            "bordereau" : "Code du cordereau en 3 lettres",
            "city": "Ville de la fiche",
            "lang": "Langue de la fiche",
            "season": "Saison de la fiche",
            "position": "Numéro de la position dans la liste",
            "image_url": "URL de l'image"
        },
        "playlist": {
            "id_playlist": "Identifiant de Playlist",
            "name": "Nom de la Playlist",
            "lang": "Langue de la fiche",
            "season": "Saison de la fiche",
            "pagination": "Numéro de la page de la playlist",
            "sheets": [
                {
                    "id_sheet": "Identifiant Fiche",
                    "id_sit": "Identifiant SIT",
                    "id_reservation": "Identifiant centrale de réservation (etablissement)",
                    "name": "Nom de la fiche",
                    "type": "Libellé de bordereau", => compliqué dans ce contexte
                    "bordereau" : "Code du cordereau en 3 lettres",
                    "city": "Ville de la fiche",
                    "lang": "Langue de la fiche",
                    "season": "Saison de la fiche",
                    "position": "Numéro de la position dans la liste",
                    "image_url": "URL de l'image"
                },
                {
                    "id_sheet": "Identifiant Fiche",
                    "id_sit": "Identifiant SIT",
                    "id_reservation": "Identifiant centrale de réservation (etablissement)",
                    "name": "Nom de la fiche",
                    "type": "Libellé de bordereau",
                    "bordereau" : "Code du cordereau en 3 lettres",
                    "city": "Ville de la fiche",
                    "lang": "Langue de la fiche",
                    "season": "Saison de la fiche",
                    "position": "Numéro de la position dans la liste",
                    "image_url": "URL de l'image"
                }
            ],
            "filters": {
                "Nom de la facette" : [
                    Valeur sélectionnée,
                    Valeur sélectionnée
                ],
                "Nom de la facette" : [
                    Valeur sélectionnée,
                    Valeur sélectionnée
                ]
            },
            "last_filter": {
                "Nom de la facette" : Valeur sélectionnée
            }
        },
        "page": {
            "id_page": "Identifiant de la page (nid ou post_id)",
            "name": "Nom de la page",
            "lang": "Langue de la page",
            "season": "Saison de la page",
            "page_type": "Type de page",
            "tags": {
                "places": "Lieux associés à la page",
                "themes": "Thématiques associées à la page",
                "seasons": "Saisons associées à la page"
            }
        }
    }
}
```

## :metal: Contributors

Thank you to all the people who have already contributed to Eskalad !

For future contributors, please read our [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md)

## :bookmark: License

Eskalad is open-sourced software licensed under the [GPL2](LICENSE).
