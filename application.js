//assets\bootstrap-4.3.1
var config = require('./config')
var express = require('express');
var socket = require('socket.io');
const mysql = require('mysql2');
const path = require('path');

var app = express();
let vEnv = 'development'

const connection = mysql.createConnection({
    host: config.env(vEnv).database.host,
    user: config.env(vEnv).database.username,
    password: config.env(vEnv).database.password,
    database: config.env(vEnv).database.database
});

app.use(express.static(__dirname + "/assets"));
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'app/views'));


//app.use(express.static(__dirname + '/modules/Dashboard')); //Static Files

var server = app.listen(config.env(vEnv).port, () => {
    console.log(`Server started on port http://` + config.env(vEnv).host + `:` + config.env(vEnv).port);
});

//Socket setup
var io = socket(server);
io.on('connection', function (socket) {
    handleSocket(socket);
});




// Controllers
const serversRoute = require('./app/controllers/serversController');

app.get('/servers', serversRoute.getServersList);
app.get('/servers/log', serversRoute.getServerLogs);







app.get('/', function (req, res) {
    var result;
    result = {bots: [{uid: 101, device: 'HP-1'}]};
    res.render('index', result);
    /*connection.query('SELECT * FROM `servers` ORDER BY id Desc', function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.log(results);
            res.json(results);
        }
    }
    );*/
});



io.emit('request');
/*
function handleWebClientCommand(socket) {

    //Send commands to bot i.e., android phone
    socket.on('commands', function (data) {
        for (var i = 0; i < botSocketList.length; i++) {
            if (botSocketList[i].tag === data.uid) {
                if (botSocketList[i] != null && botSocketList[i].connected) {
                    botSocketList[i].emit('commands', data.commands);
                    console.log('Command firing to bot server ' + data);
                } else {
                    console.log('Bot is not connected :-(');

                }
            }
        }
    });
}
function handleSocket(socket) {

    //Register admin and save socket instance to global adminSocket variable
    socket.on('registerAdmin', function (data) {
        socket.tag = "admin";
        adminSocket = socket;
        console.log(data);
        console.log("A admin connected: " + socket.id);

        //Send bot connected + data to web client i.e., list of all connected devices
        adminSocket.emit('registerBotClient', {botDataList: botDataList});

        //Send command to device i.e., bot
        handleWebClientCommand(socket);
    });

    //To register a bot and send data to web client
    socket.on('registerBot', function (data) {
        console.log(data);
        socket.tag = data.uid;
        botSocketList.push(socket);
        botDataList.push(data);
        console.log("A bot connected: " + socket.id);

        //socket.emit('commands', [{command: 'openBrowser', arg1: "google.com"}]);

        //Send bot connected + data to web client i.e., list of all connected devices
        if (adminSocket != null && adminSocket.connected)
            adminSocket.emit('registerBotClient', {botDataList: botDataList});


        //Send bot data to web client when bot send any userdata
        handleUserData(socket);

    });

    //Fired up when any socket is disconnected
    socket.on('disconnect', function () {

        console.log(socket.tag + " disconnected");
        console.log(botDataList);

        for (var i = botDataList.length - 1; i >= 0; i--) {
            if (botDataList[i].uid === socket.tag) {
                botDataList.splice(i, 1);
            }
        }

        console.log(botDataList);
        console.log(botDataList.length);

        if (adminSocket != null && adminSocket.connected)
            adminSocket.emit('offlineBot', socket.tag);

    });
}*/