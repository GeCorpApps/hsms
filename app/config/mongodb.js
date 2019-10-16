//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
const appConfig = require('./appConfig');

module.exports = {
    _uri: null,
    _client: null,
    _db: "hsms",
    async getDB() {
        const uri = appConfig.getMongoDbUri() //const dbURI = uriUtil.formatMongoose(process.env.MONGO_URI)
        const client = new MongoClient(uri.uri, { useNewUrlParser: true, useUnifiedTopology: true })
        try{
            await client.connect()
            const db = client.db(this._db)
            console.log(`Connected with MongoDb database: ${db.databaseName}`)
            return db;            
        }catch(err){
            console.log(`Error: ${err}`)
        }
    }
}