# MongoDBs

- Connect to Mongo: Inside Docker `mongo -u admin -p root`
- Ingest data from the command MongoImport
mongoimport --db local --collection comments --file data/sample_mflix/comments.json --authenticationDatabase admin --username admin --password root

**In case we have movies_db as database in MongoDB and query them**
- Use movies_db
- db.comments.find({}) to query all the data