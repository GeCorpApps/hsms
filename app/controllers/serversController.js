const MongoDB = require('../config/mongodb');

module.exports = {
    getServersList(req, res) {
        var vServers = [];
        const mongoClient = MongoDB.client();
        const serversCollection = mongoClient.db(MongoDB._db).collection("servers");
        return res.render('servers/list', {servers: serversCollectionnm})
    },
    getServerLogs(req, res) {
        var vServers = [];
        return res.render('servers/list', {servers: vServers})
    }
};