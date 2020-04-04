const express = require('express');
const mySQL = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
var path = require('path');
var appdir = path.dirname(require.main.filename);
var roomsRoute = require(`${appdir}/api/routes/rooms_routes.js`);

roomsRoute(app);

app.listen(port, () => {
    console.log('server lives! ');

}
)
