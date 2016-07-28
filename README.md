# portfolio are projects that are being showcased
# skills are articles that are being shown based on status
# projects are articles
# articles is the base of all types 

Use mongoexport/mongoimport to dump/restore a collection:

Export JSON File:

mongoexport --db <database-name> --collection <collection-name> --out filename.json

Import JSON File:

mongoimport --db <database-name> --collection <collection-name> --file filename.json