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

// init routers
roomsRoute(app);
usersRoute(app);

// start server
app.listen(port, () => {
        console.log('server lives! ');
    }
)
