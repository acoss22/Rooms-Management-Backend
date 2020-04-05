const mysql = require("mysql");

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: '3333',
    password: 'RM2020acs',
    database: "rm2020"
});


exports.executeQuery = function(query, error, success){
    conn.getConnection((err, connection) => {
        if(err) {
            error(err);
            return;
        }
        
        connection.query(query, (_error, result) => {
            if(_error) error(_error);
            
            connection.release();
            success(result);
        });
    });
}