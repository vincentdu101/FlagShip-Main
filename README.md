# portfolio are projects that are being showcased
# skills are articles that are being shown based on status
# projects are articles
# articles is the base of all types 

Use mongoexport/mongoimport to dump/restore a collection:

Export JSON File:

mongoexport --db <database-name> --collection <collection-name> --out filename.json

Import JSON File:

mongoimport --db <database-name> --collection <collection-name> --file filename.json

Import JSON File with array of objects:
mongoimport --db <database-name> --collection <collection-name> --file filename.json --jsonArray


Mongo Connection Errors

Step 1: Remove lock file.
sudo rm /var/lib/mongodb/mongod.lock

Step 2: Repair mongodb. 
sudo mongod --repair 

Step 3: start mongodb.
sudo start mongodb 
or
sudo service mongodb start

Step 4: Check status of mongodb.
sudo status mongodb 
or   
sudo service mongodb status

Step 5: Start mongo console.
mongo 

View Logs In Production
sudo journalctl -u flagship-server.service

Mongo delete from collection

# find all
db.collection.find({})

# example
db.articles.find({}) 

# delete all
db.collection.deleteMany({})

# example
db.articles.deleteMany({})

Managing s3 buckets
https://qiita.com/alokrawat050/items/56820afdb6968deec6a2

# copy from s3 