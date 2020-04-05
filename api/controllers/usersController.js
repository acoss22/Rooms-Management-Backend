var path = require('path');
var appdir = path.dirname(require.main.filename);
var mysqlCon = require(`${appdir}/connections.js`);



exports.getAllUsers = function(req, res, next){
    mysqlCon.executeQuery("select * from user;", 
    (error) => {
        console.log(error);
        res.status(500).json({"error": "something went wrong."});
    },
    (success) => {
        res.json(success);
    });
}
exports.checkNewUserParameters = function(req, res, next){
    // to be implemented
    next();
}
exports.createNewUser = function(req, res, next){
    let user = req.body;
    mysqlCon.executeQuery(`INSERT INTO user (full_name, email, password, phone_number, department, created_at, role, marked_as_deleted)
    VALUES ('${user.fullName}', '${user.email}', '${user.password}', '${user.phoneNumber}', '${user.department}', CURRENT_TIMESTAMP, '${user.role}', 0)`, 
    (error) => {
        console.log(error);
        res.status(500).json({"error": "something went wrong."});
    },
    (success) => {
        res.json({"message": `user ${user.fullName} created.`});
    });
}

exports.getUserById = function(req, res, next){
    var userId = req.params.userId;
    mysqlCon.executeQuery(`select * from user WHERE id = ${userId};`, 
    (error) => {
        console.log(error);
        res.status(500).json({"error": "something went wrong."});
    },
    (success) => {
        res.json(success);
    });
}

exports.updateUserById = function(req, res, next){
    var userId = req.params.userId;
    var user = req.body;

    mysqlCon.executeQuery(`UPDATE user SET full_name = ${user.fullName} WHERE id = ${userId};`, 
    (error) => {
        console.log(error);
        res.status(500).json({"error": "something went wrong."});
    },
    (success) => {
        res.json({"message": `user ${userId} updated.`});
    });
}

exports.deleteUserById = function(req, res, next){
    var userId = req.params.userId;
    mysqlCon.executeQuery(`UPDATE user SET marked_as_deleted = 1 WHERE id = ${userId};`, 
    (error) => {
        console.log(error);
        res.status(500).json({"error": "something went wrong."});
    },
    (success) => {
        res.json({"message": `user ${userId} deleted.`});
    });
}