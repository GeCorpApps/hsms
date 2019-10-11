module.exports = {
    getServersList(req, res) {
        var vServers = [];
        return res.render('servers/list', {servers: vServers})
    },
    getServerLogs(req, res) {
        var vServers = [];
        return res.render('servers/list', {servers: vServers})
    }
};