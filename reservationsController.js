var path = require('path');
var appdir = path.dirname(require.main.filename);
var mysqlCon = require(`${appdir}/connections.js`);

exports.getAllReservations = function (req, res, next){
    //logger.WriteInfo(`EMySQLQ - Attemping to execute query => ${sqlCommand}`);
    mysqlCon.getConnection((err, connection) => {
        connection.query('select * from reservation', (error, result) => {
            if(error) throw error;
       //RESULT
       connection.release();
       res.json(result);
            //  logger.WriteInfo(`EMySQLQ - Command executed sucessfully. Affected rows: ${result.affectedRows}`);
        });
    });
}


executeMySQLQuery = function(sqlCommand){
    //logger.WriteInfo(`EMySQLQ - Attemping to execute query => ${sqlCommand}`);
    mysqlCon.getConnection((err, connection) => {
        connection.query(sqlCommand, (error, result) => {
            if(error) throw error;
          //  logger.WriteInfo(`EMySQLQ - Command executed sucessfully. Affected rows: ${result.affectedRows}`);
            connection.release();
        });
    });
}

