var path = require('path');
var appdir = path.dirname(require.main.filename);
var userController = require(`${appdir}/api/controllers/usersController.js`);

module.exports = function(app){ 
    app.route('/api/users')
    .get(userController.getAllUsers)
    .post(userController.createNewUser);
    app.route('/api/users/:userId')
    .get(userController.getUserById)
    .patch(userController.updateUserById)
    .delete(userController.deleteUserById);
}