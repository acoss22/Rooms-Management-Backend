const express = require('express');
const mySQL = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
var path = require('path');
var appdir = path.dirname(require.main.filename);
var roomsRoute = require(`${appdir}/api/routes/rooms-routes.js`);
var usersRoute = require(`${appdir}/api/routes/users-routes.js`);

// body parser functionality to read requests' payload
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => { //Extra header options. Required in case access to this API is made from a browser.
    res.header('Access-Control-Allow-Headers', '');
    res.header('Access-Control-Allow-Origin', '');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});


// init routers
roomsRoute(app);
usersRoute(app);

app.route('*').all((req, res) => {
    res.status(404).json({"message": "Non existant route requested. (404)"});
});

app.use(function(error, req, res, next) {console.log(JSON.stringify(req)) });
// start server
app.listen(port, () => {
        console.log('server lives! ');
    }
)
