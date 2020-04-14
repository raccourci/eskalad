![Eskalad](logo.png)

![PullRequest Welcome](https://img.shields.io/badge/PR-welcome-brightgreen.svg?style=flat-square)
[![Twitter Follow](https://img.shields.io/twitter/follow/raccourciagency.svg?label=Twitter&style=social)](https://twitter.com/raccourciagency)

---

## :fire: Hawwwai GTM Events

### Sheets

<table>
    <thead>
        <tr>
            <th>Nom de l'événement</th>
            <th>Catégorie</th>
            <th>Action</th>
            <th>Label</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>hawwwai_sheet_view</td>
            <td rowspan="2">FICHE|Bordereau|Nom|Identifiant Fiche|Identifiant SIT</td>
            <td>Page vue (Identifiant Hawwwai)</td>
            <td>Identifiant Fiche Hawwwai</td>
        </tr>
        <tr>
            <td>hawwwai_sheet_view_source</td>
            <td>Page vue (Identifiant SIT Source)</td>
            <td>Identifiant SIT</td>
        </tr>
    </tbody>
</table>

```
{
    "event": "Nom de l'événement",
    "data": {
        "ga": {
            "category": "Valeur de la Catégorie",
            "action": "Valeur de l'Action",
            "label": "Valeur du Label"
        },
        "sheet": {
            "id_sheet": "Identifiant Fiche",
            "id_sit": "Identifiant SIT",
            "id_reservation": "Identifiant centrale de réservation",
            "name": "Nom de la fiche",
            "type": "Libellé de bordereau",
            "bordereau" : "Code du cordereau en 3 lettres",
            "city": "Ville de la fiche"
        }
    }
}
```

### Playlists

....

## :metal: Contributors

Thank you to all the people who have already contributed to Eskalad !

For future contributors, please read our [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md)

## :bookmark: License

Eskalad is open-sourced software licensed under the [GPL2](LICENSE).
