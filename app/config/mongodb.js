const MongoClient = require('mongodb').MongoClient;
const appConfig = require('./appConfig');

module.exports = {
    _uri: null,
    _client: null,
    _db: "hsms",
    client() {
        const uri = appConfig.getMongoDbUri
        this._client = new MongoClient(uri, { useNewUrlParser: true })
        return this._client
    },
    connect() {
        client.connect(err => {
         client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
        });
    }
}