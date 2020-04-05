var path = require('path');
var appdir = path.dirname(require.main.filename);
var mysqlCon = require(`${appdir}/connections.js`);

exports.getAllReservations = function (req, res, next){
    //logger.WriteInfo(`EMySQLQ - Attemping to execute query => ${sqlCommand}`);
    mysqlCon.executeQuery("SELECT * FROM reservation", 
    (error) => {
        console.log(error);
        res.status(500).json({"error": "something went wrong."});
    },
    (success) => {
        res.json({"message": `reservation  created.`});
    });
}


